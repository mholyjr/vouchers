<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
  public function list()
  {
    $user = auth()->user();
    $categories = $user->categories;

    return Inertia::render('Categories/List', ['categories' => $categories, 'user' => $user]);
  }

  public function edit($id = null)
  {
    $category = null;
    if ($id) {
      $category = Category::findOrFail($id);
    }
    return Inertia::render('Categories/Edit', ['category' => $category]);
  }

  public function update(Request $request, $id)
  {
    $category = Category::findOrFail($id);

    $data = $request->validate([
      'title' => 'required',
      'description' => 'required',
      'description_short' => 'required',
      'status' => 'required|numeric',
    ]);

    $category->update($data);

    return redirect()->route('categories.list')->with('success', 'Product updated successfully');
  }

  public function store(Request $request)
  {
    $data = $request->validate([
      'title' => 'required',
      'description' => 'required',
      'description_short' => 'required',
      'status' => 'required|numeric',
    ]);

    Category::create($data);
    $message = 'Product created successfully';

    return redirect()->route('categories')->with('success', $message);
  }

  public function unpublish(Request $request)
  {
    $data = $request->validate([
      'catIds' => 'required|array',
      'catIds.*' => 'exists:categories,id',
    ]);

    Category::whereIn('id', $data['productIds'])
      ->update(['status' => 0]);

    return redirect()->route('categories.list')->with('success', 'Products unpublished successfully');
  }

  public function publish(Request $request)
  {
    $data = $request->validate([
      'catIds' => 'required|array',
      'catIds.*' => 'exists:categories,id',
    ]);

    Category::whereIn('id', $data['catIds'])
      ->update(['status' => 1]);

    return redirect()->route('categories.list')->with('success', 'Products published successfully');
  }
}
