function showLoading() {
    document.getElementById('loading').style.display = 'block';
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 2000);
}