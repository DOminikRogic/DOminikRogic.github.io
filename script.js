function changeOpacity() {
    var backgroundElement = document.getElementById('Background');
    if (backgroundElement.style.opacity === "0") {
        backgroundElement.style.opacity = "1";
    } else {
        backgroundElement.style.opacity = "0";
    }
}

setInterval(changeOpacity, 10000);

function checkScreenSize() {
    const youtubeImg = document.querySelector('.youtube');
    const githubImg = document.querySelector('.github');
    const screenWidth = window.innerWidth;
    const containerWidth = screen.width;

    console.log(`Screen Width: ${screenWidth}`);
    console.log(`Container Width: ${containerWidth}`);

    // Hide YouTube image if screen width is less than 50% of container width
    if (screenWidth < containerWidth*0.4) {
        youtubeImg.style.display = 'none';
        console.log('YouTube image hidden');
    } else {
        youtubeImg.style.display = 'block';
        console.log('YouTube image shown');
    }

    // Hide GitHub image if screen width is less than 40% of container width
    if (screenWidth < (containerWidth * 0.5)) {
        githubImg.style.display = 'none';
        console.log('GitHub image hidden');
    } else {
        githubImg.style.display = 'block';
        console.log('GitHub image shown');
    }
}

// Initial check
checkScreenSize();

// Check on window resize
window.addEventListener('resize', checkScreenSize);
