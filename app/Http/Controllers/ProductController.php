<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;

class ProductController extends Controller
{
  public function list()
  {
    $user = auth()->user();

    $products = $user->products()->with('category')->get();

    return Inertia::render('Products/List', ['products' => $products, 'user' => $user]);
  }

  public function edit($id = null)
  {
    $product = null;
    if ($id) {
      $product = Product::findOrFail($id);
    }

    $categories = Category::all();
    return Inertia::render('Products/Edit', ['product' => $product, 'categories' => $categories]);
  }

  public function update(Request $request, $id)
  {
    $product = Product::findOrFail($id);

    $data = $request->validate([
      'title' => 'required',
      'price' => 'required|numeric',
      'num_of_redeems' => 'required|numeric',
      'valid_for' => 'required|numeric',
      'valid_period' => 'required',
      'category_id' => 'nullable|exists:categories,id',
    ]);

    $product->update($data);

    return redirect()->route('products.list')->with('success', 'Product updated successfully');
  }

  public function store(Request $request)
  {
    $data = $request->validate([
      'title' => 'required',
      'price' => 'required|numeric',
      'num_of_redeems' => 'required|numeric',
      'valid_for' => 'required|numeric',
      'valid_period' => 'required',
      'category_id' => 'nullable|exists:categories,id',
    ]);

    $imageKit = App::make('imagekit');

    $uploadFile = $request->file('image');

    try {
      $response = $imageKit->upload([
        'file' => fopen($uploadFile->getPathname(), 'r'),
        'fileName' => $uploadFile->getClientOriginalName(),
      ]);

      if (isset($response->responseMetadata) && $response->responseMetadata['statusCode'] == 200) {
        $data['image'] = $response->result->url;
      }
    } catch (\Exception $e) {
      throw $e;
    }

    Product::create($data);
    $message = 'Product created successfully';

    return redirect()->route('products.list')->with('success', $message);
  }

  public function unpublish(Request $request)
  {
    $data = $request->validate([
      'productIds' => 'required|array',
      'productIds.*' => 'exists:products,id',
    ]);

    Product::whereIn('id', $data['productIds'])
      ->update(['status' => 0]);

    return redirect()->route('products.list')->with('success', 'Products unpublished successfully');
  }

  public function publish(Request $request)
  {
    $data = $request->validate([
      'productIds' => 'required|array',
      'productIds.*' => 'exists:products,id',
    ]);

    Product::whereIn('id', $data['productIds'])
      ->update(['status' => 1]);

    return redirect()->route('products.list')->with('success', 'Products published successfully');
  }
}
