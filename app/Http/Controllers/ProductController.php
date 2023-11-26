<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
  public function list()
  {
    $user = auth()->user();
    $products = $user->products; // Assuming a 'products' relationship exists in the User model

    return Inertia::render('Products/List', ['products' => $products, 'user' => $user]);
  }

  public function edit($id = null)
  {
    $product = null;
    if ($id) {
      $product = Product::findOrFail($id);
    }
    return Inertia::render('Products/Edit', ['product' => $product]);
  }

  public function update(Request $request, $id)
  {
    $product = Product::findOrFail($id);

    $data = $request->validate([
      'title' => 'required',
      'price' => 'required|numeric',
    ]);

    $product->update($data);

    return redirect()->route('products.list')->with('success', 'Product updated successfully');
  }

  public function store(Request $request)
  {
    $data = $request->validate([
      'title' => 'required',
      'price' => 'required|numeric',
    ]);
    Product::create($data);
    $message = 'Product created successfully';

    return redirect()->route('products')->with('success', $message);
  }
}
