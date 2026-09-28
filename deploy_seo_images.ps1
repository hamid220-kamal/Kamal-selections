# PowerShell script to organize and rename all images for SEO

$baseDir = "d:\Kamal selections"
$brainDir = "C:\Users\HAMID KAMAL\.gemini\antigravity-ide\brain\3b367c2e-ac93-441f-8df0-59ea0a5a77b9"

# Ensure target directories exist
$targetDirs = @(
    "public\images\home",
    "public\images\women\hero",
    "public\images\women\categories",
    "public\images\kids\categories",
    "public\images\about",
    "public\images\store",
    "public\images\contact",
    "public\brand\logo"
)

foreach ($dir in $targetDirs) {
    $fullPath = Join-Path $baseDir $dir
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
    }
}

# Image mapping table: Source -> Target (relative to baseDir)
$mappings = @(
    # --- STORE REAL IMAGES ---
    @{ Src = "public\store board.png"; Dst = "public\images\store\kamal-selections-storefront-shadnagar.png" },
    @{ Src = "public\store1.png"; Dst = "public\images\store\kamal-selections-showroom-interior.png" },
    @{ Src = "public\store2.png"; Dst = "public\images\store\kamal-selections-womens-wear-collection.png" },
    @{ Src = "public\store3.png"; Dst = "public\images\store\kamal-selections-kids-wear-showroom.png" },
    
    # --- HEROES ---
    @{ Src = "public\assets\hero-bg.jpg"; Dst = "public\images\home\kamal-selections-home-hero-indian-fashion.jpg" },
    @{ Src = "public\assets\womens-hero-banner.jpg"; Dst = "public\images\women\hero\kamal-selections-womens-wear-hero-banner.jpg" },
    @{ Src = "public\assets\kids-hero-bg.jpg"; Dst = "public\images\kids\kamal-selections-kids-wear-hero-banner.jpg" },
    @{ Src = "public\assets\story-hero-bg.jpg"; Dst = "public\images\about\kamal-selections-heritage-family-story.jpg" },
    @{ Src = "public\assets\store-hero-bg.jpg"; Dst = "public\images\store\kamal-selections-store-hero-facade.jpg" },
    @{ Src = "public\assets\contact-hero-bg.jpg"; Dst = "public\images\contact\kamal-selections-contact-hero-lifestyle.jpg" },
    @{ Src = "public\assets\final-cta-bg.jpg"; Dst = "public\images\home\kamal-selections-in-store-experience-banner.jpg" },
    
    # --- FOUNDER ---
    @{ Src = "public\assets\owner.png"; Dst = "public\images\about\kamal-selections-founder-shadnagar.png" },
    
    # --- ARCHITECTURAL SHOWROOM ---
    @{ Src = "$brainDir\store_front_boutique_1790522674898.jpg"; Dst = "public\images\store\kamal-selections-boutique-exterior-shadnagar.jpg"; FromBrain = $true },
    @{ Src = "$brainDir\store_hero_bg_1790522597923.jpg"; Dst = "public\images\contact\kamal-selections-shadnagar-evening-showroom.jpg"; FromBrain = $true },
    
    # --- WOMEN'S EDITORIAL & CATEGORIES ---
    @{ Src = "public\assets\women-store-browsing.jpg"; Dst = "public\images\women\kamal-selections-womens-boutique-browsing.jpg" },
    @{ Src = "public\assets\center-womens-hero.jpg"; Dst = "public\images\home\kamal-selections-womens-couture-showcase.jpg" },
    @{ Src = "public\assets\hero-bg-alt.jpg"; Dst = "public\images\home\kamal-selections-festive-ethnic-collection.jpg" },
    @{ Src = "public\assets\cat-dresses.jpg"; Dst = "public\images\women\categories\kamal-selections-womens-designer-dresses.jpg" },
    @{ Src = "public\assets\cat-kurtis.jpg"; Dst = "public\images\women\categories\kamal-selections-womens-embroidered-kurtis.jpg" },
    @{ Src = "public\assets\cat-tops.jpg"; Dst = "public\images\women\categories\kamal-selections-womens-casual-trendy-tops.jpg" },
    @{ Src = "public\assets\cat-leggings.jpg"; Dst = "public\images\women\categories\kamal-selections-womens-premium-leggings.jpg" },
    @{ Src = "public\assets\cat-burqa.jpg"; Dst = "public\images\women\categories\kamal-selections-womens-modest-burqa-collection.jpg" },
    @{ Src = "public\assets\cat-3piece.jpg"; Dst = "public\images\women\categories\kamal-selections-womens-three-piece-ethnic-suits.jpg" },
    @{ Src = "public\assets\cat-partywear.jpg"; Dst = "public\images\women\categories\kamal-selections-womens-sequined-partywear.jpg" },
    
    # --- KIDS EDITORIAL & CATEGORIES ---
    @{ Src = "public\assets\kids-intro-lifestyle.jpg"; Dst = "public\images\kids\kamal-selections-kids-lifestyle-shopping.jpg" },
    @{ Src = "public\assets\kids-girl-split.jpg"; Dst = "public\images\kids\kamal-selections-girls-pastel-lehenga.jpg" },
    @{ Src = "public\assets\kids-boy-split.jpg"; Dst = "public\images\kids\kamal-selections-boys-emerald-sherwani.jpg" },
    @{ Src = "public\assets\kids-signature-campaign.jpg"; Dst = "public\images\kids\kamal-selections-kids-signature-campaign.jpg" },
    @{ Src = "public\assets\center-kids-hero.jpg"; Dst = "public\images\home\kamal-selections-kids-celebration-attire.jpg" },
    @{ Src = "public\assets\cat-girls-wear.jpg"; Dst = "public\images\kids\categories\kamal-selections-girls-ethnic-wear.jpg" },
    @{ Src = "public\assets\cat-boys-wear.jpg"; Dst = "public\images\kids\categories\kamal-selections-boys-kurta-pyjama.jpg" },
    @{ Src = "public\assets\cat-frocks.jpg"; Dst = "public\images\kids\categories\kamal-selections-girls-party-frocks.jpg" },
    @{ Src = "public\assets\cat-kids-sets.jpg"; Dst = "public\images\kids\categories\kamal-selections-kids-coordinated-sets.jpg" },
    
    # --- CRAFTSMANSHIP COLLAGE ---
    @{ Src = "public\assets\collage-fabric.jpg"; Dst = "public\images\home\kamal-selections-craftsmanship-zari-embroidery.jpg" },
    @{ Src = "public\assets\collage-kurti.jpg"; Dst = "public\images\home\kamal-selections-artisan-kurti-stitching.jpg" },
    @{ Src = "public\assets\collage-kids.jpg"; Dst = "public\images\home\kamal-selections-kids-comfort-fabric-detail.jpg" },
    @{ Src = "public\assets\collage-styling.jpg"; Dst = "public\images\home\kamal-selections-sequin-styling-craft.jpg" },
    
    # --- LOGOS ---
    @{ Src = "public\assets\logo.png"; Dst = "public\brand\logo\kamal-selections-logo.png" },
    @{ Src = "public\assets\logo-transparent.png"; Dst = "public\brand\logo\kamal-selections-logo-transparent.png" }
)

Write-Output "Copying and renaming files..."
foreach ($item in $mappings) {
    if ($item.FromBrain) {
        $sourcePath = $item.Src
    } else {
        $sourcePath = Join-Path $baseDir $item.Src
    }
    $targetPath = Join-Path $baseDir $item.Dst
    
    if (Test-Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $targetPath -Force
        Write-Output "COPIED: $($item.Src) -> $($item.Dst)"
    } else {
        Write-Warning "NOT FOUND: $sourcePath"
    }
}

Write-Output "Done creating SEO renamed images!"
