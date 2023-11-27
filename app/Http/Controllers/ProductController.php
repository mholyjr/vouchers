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
    $products = $user->products;

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
      'num_of_redeems' => 'required|numeric',
      'valid_for' => 'required|numeric',
      'valid_period' => 'required'
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
      'valid_period' => 'required'
    ]);

    Product::create($data);
    $message = 'Product created successfully';

    return redirect()->route('products')->with('success', $message);
  }
}
