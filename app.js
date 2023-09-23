let input = document.querySelector('input'),
    btn = document.querySelector('button');


btn.addEventListener('click' , () => {
    btn.innerText = 'downloading...';
    fetchFile(input.value);
})

function fetchFile(url){

    fetch(url).then(res => res.blob()).then(file => {

        let imgUrl = URL.createObjectURL(file);
        let downloadLink = document.createElement('a');
        downloadLink.href = imgUrl;
        downloadLink.download = url.replace(/^.*[\\\/]/,'');
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();
        input.value = '';
        URL.revokeObjectURL(imgUrl);
        btn.innerText = 'download';
    }).catch(() => {
        alert('Failed to Download File!');
    });
};