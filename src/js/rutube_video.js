const videoRutubeInit = (selector) => {
    const videos = document.querySelectorAll(`.${selector}`)
    if(videos.length > 0){
        videos.forEach(video => {
            videoRutubeGenerate(video)
        })
    }
}

const videoRutubeGenerate = (video) => {

    const btn = video.querySelector('.video-block__button');
    const videoId = btn.dataset.videoId;
    const container = video.querySelector('.video-block__inner');
    //console.log(videoId)

    btn.addEventListener('click',() => {
        const iframe = iframeRutubeGenerate(videoId);
        container.innerHTML = '';
        container.appendChild(iframe)
    })
}

const iframeRutubeGenerate = (videoId) => {
    const iframe = document.createElement('iframe');
    const src = "https://www.youtube.com/embed/" + videoId;

    iframe.setAttribute('src', src)
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('allow', 'clipboard-write; autoplay')
    iframe.setAttribute('webkitAllowFullScreen', '')
    iframe.setAttribute('mozallowfullscreen', '')
    iframe.setAttribute('allowfullscreen', '')
    iframe.classList.add('video-block__content');
    return iframe;
}


videoRutubeInit('video-block__youtube');

const youtubeVideo = document.querySelector('.youtube_video');
if(youtubeVideo){

}


// < iframe
// width = "1280"
// height = "720"
// src = "https://www.youtube.com/embed/k0ZqNL56n_E"
// title = "Кухонный салон Кухмистер (г.Саратов). Кухни на заказ по индивидуальным размером, стильно и недорого"
// frameBorder = "0"
// allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// allowFullScreen > < /iframe>




