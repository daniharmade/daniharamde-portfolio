#!/usr/bin/env python3
"""
Image Optimization Script for Portfolio Website
Converts all images to WebP format with resizing and quality optimization.
"""

import subprocess
import os
import sys
import json

BASE_DIR = "/Users/daniharmade/MyData/AboutMe/Website-Portfolio/public"

def check_pillow():
    """Check if Pillow is available, install if not."""
    try:
        from PIL import Image
        print("✅ Pillow is available")
        return True
    except ImportError:
        print("⚠️  Pillow not found, attempting to install...")
        subprocess.run([sys.executable, "-m", "pip", "install", "Pillow"], check=True)
        try:
            from PIL import Image
            print("✅ Pillow installed successfully")
            return True
        except ImportError:
            print("❌ Failed to install Pillow")
            return False

def convert_to_webp(input_path, output_path, max_width=None, quality=80):
    """Convert an image to WebP format with optional resizing."""
    from PIL import Image
    
    try:
        img = Image.open(input_path)
        
        # Convert to RGB if necessary (for PNG with alpha, use RGBA)
        if img.mode == 'RGBA':
            pass  # Keep RGBA for transparency
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        original_size = os.path.getsize(input_path)
        original_dimensions = img.size
        
        # Resize if max_width is specified and image is wider
        if max_width and img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.LANCZOS)
        
        # Save as WebP
        img.save(output_path, 'WEBP', quality=quality, method=6)
        
        new_size = os.path.getsize(output_path)
        savings = original_size - new_size
        savings_pct = (savings / original_size) * 100 if original_size > 0 else 0
        
        return {
            'input': os.path.basename(input_path),
            'output': os.path.basename(output_path),
            'original_size': original_size,
            'new_size': new_size,
            'savings': savings,
            'savings_pct': savings_pct,
            'original_dimensions': original_dimensions,
            'new_dimensions': img.size,
            'success': True
        }
    except Exception as e:
        return {
            'input': os.path.basename(input_path),
            'output': os.path.basename(output_path),
            'error': str(e),
            'success': False
        }

def format_size(size_bytes):
    """Format bytes to human readable size."""
    if size_bytes < 1024:
        return f"{size_bytes}B"
    elif size_bytes < 1024 * 1024:
        return f"{size_bytes / 1024:.1f}KB"
    else:
        return f"{size_bytes / (1024 * 1024):.2f}MB"

def main():
    if not check_pillow():
        print("❌ Cannot proceed without Pillow. Please install it: pip3 install Pillow")
        sys.exit(1)
    
    results = []
    total_original = 0
    total_new = 0
    
    # ═══════════════════════════════════════════════════════
    # 1. Certificate images → WebP (max 800px, quality 80%)
    # ═══════════════════════════════════════════════════════
    print("\n" + "=" * 60)
    print("📜 Converting Certificate Images")
    print("=" * 60)
    
    cert_dir = os.path.join(BASE_DIR, "certificate")
    cert_files = [f for f in os.listdir(cert_dir) 
                  if f.lower().endswith(('.jpg', '.jpeg', '.png')) and not f.startswith('.')]
    
    for filename in sorted(cert_files):
        input_path = os.path.join(cert_dir, filename)
        name_without_ext = os.path.splitext(filename)[0]
        output_path = os.path.join(cert_dir, f"{name_without_ext}.webp")
        
        result = convert_to_webp(input_path, output_path, max_width=800, quality=80)
        results.append(result)
        
        if result['success']:
            total_original += result['original_size']
            total_new += result['new_size']
            print(f"  ✅ {result['input']:50s} {format_size(result['original_size']):>8s} → {format_size(result['new_size']):>8s} ({result['savings_pct']:.1f}% saved)")
        else:
            print(f"  ❌ {result['input']:50s} Error: {result['error']}")
    
    # ═══════════════════════════════════════════════════════
    # 2. Root public images
    # ═══════════════════════════════════════════════════════
    print("\n" + "=" * 60)
    print("🖼️  Converting Root Public Images")
    print("=" * 60)
    
    root_images = [
        ("dani.png", 500),
        ("bannerp.png", None),
        ("logo.png", 200),
    ]
    
    for filename, max_w in root_images:
        input_path = os.path.join(BASE_DIR, filename)
        name_without_ext = os.path.splitext(filename)[0]
        output_path = os.path.join(BASE_DIR, f"{name_without_ext}.webp")
        
        if not os.path.exists(input_path):
            print(f"  ⚠️  {filename} not found, skipping")
            continue
        
        result = convert_to_webp(input_path, output_path, max_width=max_w, quality=80)
        results.append(result)
        
        if result['success']:
            total_original += result['original_size']
            total_new += result['new_size']
            print(f"  ✅ {result['input']:50s} {format_size(result['original_size']):>8s} → {format_size(result['new_size']):>8s} ({result['savings_pct']:.1f}% saved)")
        else:
            print(f"  ❌ {result['input']:50s} Error: {result['error']}")
    
    # ═══════════════════════════════════════════════════════
    # 3. Project images → WebP (quality 80%)
    # ═══════════════════════════════════════════════════════
    print("\n" + "=" * 60)
    print("🚀 Converting Project Images")
    print("=" * 60)
    
    proj_dir = os.path.join(BASE_DIR, "project")
    proj_files = [f for f in os.listdir(proj_dir)
                  if f.lower().endswith(('.jpg', '.jpeg', '.png')) and not f.startswith('.')]
    
    for filename in sorted(proj_files):
        input_path = os.path.join(proj_dir, filename)
        name_without_ext = os.path.splitext(filename)[0]
        output_path = os.path.join(proj_dir, f"{name_without_ext}.webp")
        
        result = convert_to_webp(input_path, output_path, max_width=None, quality=80)
        results.append(result)
        
        if result['success']:
            total_original += result['original_size']
            total_new += result['new_size']
            print(f"  ✅ {result['input']:50s} {format_size(result['original_size']):>8s} → {format_size(result['new_size']):>8s} ({result['savings_pct']:.1f}% saved)")
        else:
            print(f"  ❌ {result['input']:50s} Error: {result['error']}")
    
    # ═══════════════════════════════════════════════════════
    # Summary
    # ═══════════════════════════════════════════════════════
    print("\n" + "=" * 60)
    print("📊 OPTIMIZATION SUMMARY")
    print("=" * 60)
    
    successful = [r for r in results if r['success']]
    failed = [r for r in results if not r['success']]
    
    total_savings = total_original - total_new
    total_savings_pct = (total_savings / total_original) * 100 if total_original > 0 else 0
    
    print(f"  Total files processed:  {len(results)}")
    print(f"  Successful conversions: {len(successful)}")
    print(f"  Failed conversions:     {len(failed)}")
    print(f"  Original total size:    {format_size(total_original)}")
    print(f"  New total size:         {format_size(total_new)}")
    print(f"  Total savings:          {format_size(total_savings)} ({total_savings_pct:.1f}%)")
    print()
    
    if failed:
        print("  ❌ Failed files:")
        for r in failed:
            print(f"     - {r['input']}: {r.get('error', 'Unknown error')}")
    
    # Write results to JSON for reporting
    report_path = os.path.join(os.path.dirname(BASE_DIR), "image_optimization_report.json")
    with open(report_path, 'w') as f:
        json.dump({
            'total_original': total_original,
            'total_new': total_new,
            'total_savings': total_savings,
            'total_savings_pct': round(total_savings_pct, 1),
            'files': results
        }, f, indent=2)
    print(f"\n📝 Detailed report saved to: {report_path}")

if __name__ == "__main__":
    main()
