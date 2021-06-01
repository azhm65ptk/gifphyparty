
const $searchInput=$('#search');
const $gifArea= $("#gif-area");

function addGif(res){
    let numResult=res.data.length;
    if(numResult){

    let randomNum= Math.floor(Math.random()*numResult);
    let newCol=$('<div>', {class: 'col-md-4 col-12 mb-4' });
    let newGif=$('<img>',{
        src: res.data[randomNum].images.original.url,
        class: 'w-100'
    });
    newCol.append(newGif);
    $gifArea.append(newCol);
    }

}



$('form').on('submit', async function(e){

    e.preventDefault();
    let search=$searchInput.val();
    $searchInput.val('');

    const res= await axios.get('https://api.giphy.com/v1/gifs/search',{
        params:{
            q: search,
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    })
    addGif(res.data);
})

$('#remove').on('click', function(){
    $gifArea.empty();
})
