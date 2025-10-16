#!/bin/bash

# INSTRUCTIONS TO ADD THE BAR PHOTO:
# ===================================

# 1. Save your bar bottles image to Downloads folder as "bar.jpg"
# 2. Then run this script:
#    chmod +x SAVE_IMAGE_HERE.sh
#    ./SAVE_IMAGE_HERE.sh

# Or manually copy it:
# cp ~/Downloads/bar.jpg assets/images/bar-bottles.jpg

if [ -f ~/Downloads/bar.jpg ]; then
    cp ~/Downloads/bar.jpg assets/images/bar-bottles.jpg
    echo "✅ Image saved successfully!"
    echo "Now run:"
    echo "  git add assets/images/bar-bottles.jpg"
    echo "  git commit -m 'Add bar bottles background photo'"
    echo "  git push origin master"
else
    echo "❌ Please save your image as ~/Downloads/bar.jpg first"
    echo "Or drag and drop it to: $(pwd)/assets/images/bar-bottles.jpg"
fi
