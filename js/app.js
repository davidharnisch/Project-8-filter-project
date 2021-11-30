// Work to get the filter buttons working
(function(){

    const filterButton = document.querySelectorAll('.filter-btn')   
    
      


    filterButton.forEach(function(button){
        button.addEventListener('click', function(e){
            e.preventDefault() 
            const filter = e.target.dataset.filter
            const storeItems = document.querySelectorAll('.store-item') 
            storeItems.forEach(function(item){
                if ( filter == 'all' ) {           
                item.style.display = 'block'
            }
                else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block'
                    }
                    else {
                        item.style.display = 'none' 
                    }

                }
            })

        })
    })


    

})();

//wire up filter search box
(function(){
    const searchBox = document.querySelector('#search-item')
    const storeItems = document.querySelectorAll('.store-item')

  
    searchBox.addEventListener('keyup', function(e){

            const searchFilter = e.target.value.toLowerCase().trim()

            storeItems.forEach(function(item){


            if (item.textContent.includes(searchFilter)) {
                item.style.display = 'block' 
            }

            else {
                item.style.display = 'none' 
            }


    })

})
 

})();