
$( document ).ready(function() {
    var currentPage = 1;
    
    $.ajax({
        url:"https://raw.githubusercontent.com/gabrielbender/ecommerce-prova-tecnica/master/mock-products.json",
        method:"GET"
    }).done(function(resposta){
        var dados = JSON.parse(resposta);
        var pagesQtd = Math.ceil(dados.products.length / 20); 
        var productList = $('.product-list');
        dados.products.forEach(function(item,index){
            var produto = 
            `
            <li class="product-item" data-number=${index + 1} data-page=${Math.floor((index) / 20)+1}>
                <div class="product-wrapper">
                    <a href="#">
                        <div class="product-image-wrapper">
                            <img 
                                src="${item.image}"
                                class="product-image" 
                                alt="Foto do produto ${item.name}" 
                            />
                        </div>
                        <div class="product-info">
                            <h2 class="product-name">${item.name}</h2>
                            <p class="product-value">R$ ${item.price}</p>
                        </div>
                    </a>
                </div>
            </li>
            `;
            
            productList.append(produto);
            
        });

        pagination(currentPage);

        for(let i = 1; i <= pagesQtd; i++){
            $('.last-page').before(`
                <li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>
            `);
        }

        $('.last-page .page-link').attr("data-page", pagesQtd);

        function pagination(page){
            $(".product-item").css("display","none");
            $(".product-item[data-page="+page+"] ").css("display","block");
            console.log(page);
        }
    
        $('.page-link').on("click", function(event){
            event.preventDefault();
            pagination($(this).attr('data-page'));
        });

    });
    
    
});



