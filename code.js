<script>

    function test(){
    return fetch('https://pixabay.com/api/?key=10893170-7721f110d46845b4f02876428&q=computer')
    .then(response => {
        return response.json()
    })
    .then(resp => {
        let liczba = Math.floor(Math.random() * 10);
        console.log(liczba)
        let sprawdzam = resp.hits[liczba].largeImageURL; 
        console.log(sprawdzam)
        return sprawdzam;
    })
    .catch((message)=>{
        console.log(message)
    })
}

test().then(v => {
    var header = document.getElementById('background');
    header.style.backgroundImage = 'url("'+v+'")';

});
</script>
