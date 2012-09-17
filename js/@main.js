$(document).ready(function() {

	$('.vitrine li').each(function(){
		if (($(this).find('.oldPrice').length == 0)&&($(this).find('.ouAte').length != 0)){
			$(this).find('.newPrice').prepend('Ã  vista ');
			$(this).find('.newPrice').css('color', '#999');
			$(this).find('.newPrice').css('font-size', '12px');
		};
	});
	
	$('.btn-add-buy-button-asynchronous').click(function(){
		$('#carrinho-barra #carrinho #menu').slideDown('fast');
	});
	
	if ($('.skuListPrice').text() == $('.skuListPrice').text()){
		$('.valor-por span').text('Ã  vista');
	};
	
	$('.btn-add-buy-button-asynchronous').click(function(){
		$('#topBar > #menu').slideDown('fast');
	});
	
	if(!($('body').hasClass('promocionais')) && !($('body').hasClass('resultado-busca')) && !($('body').hasClass('home'))){
		
		var linkHref = document.location.href.split('/');
		var linkCategoria = linkHref[3];
		
		if (linkCategoria.indexOf('#') != -1){
			newLink = linkCategoria.split('#');
			linkCategoria = newLink[0];
		}else if (linkCategoria.indexOf('?') != -1){
			newLink = linkCategoria.split('?');
			linkCategoria = newLink[0];
		}	
		
		var itensDepartamento = $('#sideBar #departmentNavigator > .menu-departamento');
		
		
		itensDepartamento.find('.'+linkCategoria).prependTo(itensDepartamento);
		$('#sideBar #departmentNavigator > .menu-departamento ul').first().css('display', 'block');
	}
	//bookmark button
	$("a.bookmark").click(function(){
	   var bookmarkUrl = this.href;
	   var bookmarkTitle = this.title;
	 
	   if ($.browser.mozilla) // For Mozilla Firefox Bookmark
	   { 
		window.sidebar.addPanel(bookmarkTitle, bookmarkUrl,"");
	   } 
	   else if($.browser.msie) // For IE Favorite
	   { 
		window.external.AddFavorite( bookmarkUrl, bookmarkTitle); 
	   }
	   else if($.browser.opera ) // For Opera Browsers
	   { 
		$(this).attr("href",bookmarkUrl);
		$(this).attr("title",bookmarkTitle);
		$(this).attr("rel","sidebar");
		$(this).click();
	   } 
	   else // for other browsers which does not support
	   { 
			alert('Por favor, aperte CTRL+D para adicionar aos favoritos');
	   }
	   return false; 
	});
	
		
	$('.vitrineFotos ul li').eq(0).css('margin-top', '-50px');
	$('.vitrineFotos ul li').eq(2).css('margin-top', '-50px');
	$('.vitrineFotos ul li').eq(4).css('margin-top', '-50px');
	$('.menu-navegue a').attr('href', 'javascript:void(0)');
	
	$('#carrinho-barra .cart-info li.total-cart').appendTo('#carrinho-barra #carrinho #menu');
	
	$('.giftlistcreate-nouser').removeAttr('href');
	
	//ALTERA VALOR DO INPUT DE search
	
	$('.search input.fulltext-search-box').val('Pesquisar...');
	$('.search input.fulltext-search-box').click(function() {
	 if($(this).val() == 'Pesquisar...') {
	 $(this).val('');
	}

	$('.search input.fulltext-search-box').blur(function() {
	 if($(this).val() == '') {
	 $(this).val('Pesquisar...');
	 }else if ($(this).val()== 'Digite Aqui'){
	 $(this).val('Pesquisar...');
	 }
	 });
	});
	
	/*if($('body').hasClass('produto')){
		$('.fbComments.n1colunas #especificacoesTecnicas').appendTo('#content #caracteristicas');	
	}*/
	
	$('#abasEspCom #abas .comentarios').click(function(){
		$('.fbComments.n1colunas').show();
		$('#abasEspCom #caracteristicas').hide();
		$('#abasEspCom #abas .comentarios').addClass('active');
		$('#abasEspCom #abas .especificacoes').removeClass('active');
	});

	$('#abasEspCom #abas .especificacoes').click(function(){
		$('.fbComments.n1colunas').hide();
		$('#abasEspCom #caracteristicas').show();
		$('#abasEspCom #abas .especificacoes').addClass('active');
		$('#abasEspCom #abas .comentarios').removeClass('active');
	});
	
	$('a.listToggle').click(function(){
		$('#productList').slideToggle();
	});
	
	
	items_carrinho();
	//$('p.comprar-junto a').quickBuy();
	
	//$("#carrinho-barra #carrinho #menu").append("<a href='/Site/Carrinho.aspx' class='menucarrinhoir'>Finalizar Compra</a>");
    $('p.loginmsg').html('<span>(</span><a href="/Site/Login.aspx">Entrar</a><span>)</span>');
    $('#menu .menu-departamento h3:last a').css('background', 'none');
    $('#divCompreJunto h4').text('Compre Junto');
	//$('#sideBar #departmentNavigator h5').css('display', 'none');
	//$('#sideBar #departmentNavigator h5').next('ul').css('display', 'none');
	
	
	$('.hideCarrinhoMenu').click(function(){
		$('#carrinho-barra #carrinho #menu').slideToggle('slow');	
	});
	
	$('.hideCarrinhoMenuProd').click(function(){
		$('#topBar #menu').slideToggle('slow');	
	});
    
    //Aumenta a thumb das imagens do produto
    var splitSrc;
    $('.thumbs li a#botaoZoom img').each(function(){
        splitSrc = $(this).attr('src').split('/');
        splitSrc[5] = parseInt(splitSrc[5], 10)+1
        $(this).attr('src', splitSrc.join('/'))
    });
    
	if(!($('body').hasClass('resultado-busca'))){
		$('#sideBar #departmentNavigator .menu-departamento h3').click(function() {
			$('#sideBar #departmentNavigator .menu-departamento ul').hide('fast');
			$(this).next('ul').slideToggle('fast', function() {
			});
		});
	}else{
		$('#sideBar #departmentNavigator > .menu-departamento h3').click(function() {
			$('#sideBar #departmentNavigator > .menu-departamento ul').hide('fast');
			$(this).next('ul').slideToggle('fast', function() {
			});
		});
	}
	
    $('#sideBar #departmentNavigator .menu-departamento h3 a').attr('href', 'javascript:void(0);');
	
	$('.searchResultsTime').remove()
	$('.sub').last().remove()
	$('.pager.top').appendTo('.resultado-busca-filtro');
 
// Barra suspensa superior 
	$('#carrinho-barra').hide();
	$(window).scroll(function(){
		if($(window).scrollTop() < 20){
			$('#carrinho-barra').fadeOut('normal');
		} else {
			$('#carrinho-barra').fadeIn('slow');
		}
	});
	$('#carrinho-barra #seta a').click(function(){
		$('#carrinho-barra *').hide();
		$('#carrinho-barra').animate({"top": "-=32px"}, 500, 'linear' ,function(){
			$('#carrinho-barra #seta2 *').show();
			$('#carrinho-barra #seta2').slideDown(300);
		});
	});
	$('#carrinho-barra select')
	$('#carrinho-barra #seta2 a').click(function(){
		$('#carrinho-barra #seta2').fadeOut(100);
		$('#carrinho-barra').animate({"top": "+=32px"}, 500, 'linear' ,function(){
			$('#carrinho-barra :not(#seta2,script,legend,label,select)').fadeIn('slow');
			$('#carrinho-barra #carrinho #menu').hide();
		});
	}); 
	
	//Troca o texto da seleÃ§Ã£o de itens por pÃ¡gina
	
	/*if($('body').hasClass('categoria')){
		var texto = $('#collections .collectionWrap .resultado-busca-filtro > .filterBy').text().split('<');
		texto[0].replace('Itens por pÃ¡gina','Mostrar:');
	}*/
	
	//funÃ§Ã£o para os banners
	
	var linkHref = document.location.href.split('/');
	var linkCategoria = linkHref[3];
	
	if (linkCategoria.indexOf('#') != -1){
		newLink = linkCategoria.split('#');
		linkCategoria = newLink[0];
	}else if (linkCategoria.indexOf('?') != -1){
		newLink = linkCategoria.split('?');
		linkCategoria = newLink[0];
	}	
	
	$('body.categoria #content .topBanners#'+linkCategoria).removeClass('inactive');
	$('body.departamento #content .topBanners#'+linkCategoria).removeClass('inactive');
	
	if($('body').hasClass('categoria')){
		$('.navigation-tabs').appendTo('#sideBar > #departmentNavigator > .menu-departamento ul:first');
		$('.search-multiple-navigator').attr('style','display: block!important;');
		$('.search-single-navigator').attr('style','display: none!important;');
		$('.menu-navegue').attr('style','display: none!important;');
		$('.search-multiple-navigator > h3').attr('style','display: none!important;');
		$('.search-multiple-navigator > h4').attr('style','display: none!important;');
	}
	
	if($('body').hasClass('departamento')){
		$('.navigation-tabs').appendTo('#sideBar > #departmentNavigator > .menu-departamento ul:first');
		$('.search-multiple-navigator').attr('style','display: block!important;');
		$('.search-single-navigator').attr('style','display: none!important;');
		$('.menu-navegue').attr('style','display: none!important;');
		$('.search-multiple-navigator > h3').attr('style','display: none!important;');
		$('.search-multiple-navigator > h4').attr('style','display: none!important;');
	}
	
	/*if ($('.btn-ok.newsletter-button-ok').click()){
		var nomeCliente;
		nomeCliente = $('#newsletterClientEmail').val();
		$('#newsletterClientName').attr('value', nomeCliente);
	}*/
	function getDate(offset){
		var now = new Date();
		var hour = 60*60*1000;
		var min = 60*1000;
		return new Date(now.getTime() + (now.getTimezoneOffset() * min) + (offset * hour));
	}
	
	var dateCET = getDate(-3);
	
	if ((dateCET.getHours() < 12) && (dateCET.getHours() >= 5)){
		$('#saudacaoHorario').text('Bom dia ');
	} else if ((dateCET.getHours() >= 12) && (dateCET.getHours() <= 18)){
		$('#saudacaoHorario').text('Boa tarde ');
	} else {
		$('#saudacaoHorario').text('Boa noite ');
	}
	
	if($('p.loginmsg').length != 0){
		$('#saudacaoHorario').remove();
	}
	
	var windowlocation = document.location.href;
    $('.fbComments.n1colunas').prepend('<div class="fb-comments" data-href="'+windowlocation+'" data-num-posts="5" data-width="980"></div>');
	var urlimagem = $('#image-main').attr('src');
	$('#productsSocial').append('<a href="http://pinterest.com/pin/create/button/?url='+windowlocation+'&media=http://www.mariapresenteira.com.br'+urlimagem+'" class="pin-it-button" count-layout="none"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>\
	');
	
	$('#productsSocial').append('<div id="fbLike"><iframe src="//www.facebook.com/plugins/like.php?href='+windowlocation+'&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe></div>');
	
	$('#twitterSearch .tweet:last').find('img').css('display','none');
	
	
	$('#all > #menu > div:not(.menu-departamento)').remove();
	
	$('.navigator > div:not(.menu-departamento)').remove();
	
	if($('body').hasClass('produto')){
		$('.prateleira.sidebar ul:last').addClass('last');
	}
	
	
	/*var nd = $('.discount.pct .flag').text().split('%');
	$('.discount.pct .flag').html(nd[0]);*/
	/*** DESC PROD PAGE****/
	if ($('#discount .flag').length != 0 ){
		var nd = $('#discount .flag').text().split('%');
		var dc = nd[0] * 0.01
		var vp = $('.valor-por strong').text().split('R$');
		var rd = vp[1].replace(",",".");
		var di = rd * dc
		var vcd = rd - di
		vcd=vcd.toFixed(2);

		if(isNaN(vcd)){
			$('#discontoBoleto').remove();
		};
		if (nd[1] == " desconto Inteligente"){
			$('#discontoBoleto').html('<span class="discontoBoleto">R$'+vcd+'</span> Ã  vista no <strong>boleto</strong>');
			$('.valor-dividido').css('margin-top', '0');
		};
	};
	/**********FlLAG CATEGORIAS ******/
	$('.discount.pct .flag').each(function(){
		if ($(this).filter(":contains(FlagDesconto)").length != 0 ){
			var nd = $(this).text().split('%');
			var dc = nd[0];
			
			$(this).html(nd[0]);
			$(this).css('display', 'block');
		};
	});
	
});

//$('.pager .pages li.page-number:eq('+this.selectedIndex+')');

//$(document).ajaxComplete(function(event,request, settings){
$(document).ajaxStart(function(event,request, settings){
	if ($("body").attr("class") == "home"){
		$('#newsletterClientName').attr('value', 'Cliente');
		if ($("#newsletterClientName").attr("value") == "Digite seu nome..."){
			$('#newsletterClientName').attr('value', 'Cliente');
		}
	};

	if($('.skuBestInstallmentNumber').html() == 1){
		 $('.valor-por strong').css('clear', 'both');
		 $('.valor-por strong').css('font-size', '36px');
		 $('.valor-por strong').css('color', '#8280BC');
	};
	
	if ($('.valor-de').css('display') != 'none'){
	   $('.span-valor-por').text('por ');
	}
	
	$('.success label').html('<p>Obrigado por se cadastrar!</p>');
	
	
});

$(document).ajaxComplete(function(event,request, settings){
	$('.success label').html('<p>Obrigado por se cadastrar!</p>');
});

$(document).ajaxStop(function(){
	
	$('.vitrine li').each(function(){
		if(($(this).find('.oldPrice').length > 0) && ($(this).find('.vitrine .newPrice span').text() != 'por ')){
			$(this).find('em.installment').css('display', 'none');
		};
		if ($(this).find('em.installment').filter(":contains(ou atÃ©)").length != 0){
			$(this).find('em.installment').css('display', 'block');
			$(this).find('em.installment').css('bottom', '80px');
			$(this).find('.newPrice em').css('font-size', '12px');
			$(this).find('.newPrice em').css('float', 'none');
			$(this).find('.newPrice em').css('color', '#999');
			$(this).find('.newPrice em').css('clear', 'none');
			$(this).find('.oldPrice, .newPrice, .newPrice span').css('position', 'static');
			$(this).find('.ouAteValor').css('font-size', '36px');
			$(this).find('.ouAteValor').css('float', 'left');
			$(this).find('.ouAteValor').css('clear', 'both');
			$(this).find('.ouAteValor').css('width', '200px');
			$(this).find('.ouAteValor').css('color', '#8786C0');
			$(this).find('.ouAte').css('color', '#8786C0');
			$(this).find('.ouAte').css('position', 'relative');
			$(this).find('.ouAte').css('top', '5px');
			$(this).find('.prices').css('position', 'absolute');
			$(this).find('.prices').css('width', '240px');
			$(this).find('.prices').css('left', '0');
			$(this).find('.prices').css('text-align', 'center');
			$(this).find('.prices').css('bottom', '135px');
		};
	});

	var optionsSelect, pgClass;
	$('.pager.top .pages').children('li.page-number').each(function(){
		if($(this).hasClass('pgCurrent')){
			pgClass = 'page-number newPageSelector pgCurrent';
		}else{
			pgClass = 'page-number newPageSelector';
		}
		optionsSelect += '<option class="'+pgClass+'">'+$(this).html()+'</option>';
	});
	$('.pager .pages').append('<div class="firstMask"><div class="paginacaoMask"><select class="paginacao">'+optionsSelect+'</select></div></div>');
	$('.pager .pages select.paginacao' ).bind('change', function(){
		$('.pager .pages li.page-number:eq('+this.selectedIndex+')').trigger("click");
	});
	
	$('.rssBody ul li.rssRow h4 a').each(function(){
		$(this).attr('target','_blank');
	});
	
	$('.price').each(function(){
		if($(this).find('.oldPrice').size() == 0){
			$(this).find('.newPrice span').remove();
		}
	});
	
	if($('.btnVideo').size() <= 0){
		if($('.value-field.Video object').size() > 0){
			$('.value-field.Video').appendTo('#videoProduto');
			$('#show ul.thumbs').append('<li><a class="btnVideo" href="javascript:void(0);"></a></li>');
			
			$('#videoProduto').attr('display','none !important');
			
			$('.value-field.Video object').prepend('<param name="wmode" value="opaque"');
			
			$('.btnVideo').bind('click',function(){
				$('#videoProduto').attr('style','display: block !important;');
			});
			
			$('ul.thumbs li a:not(.btnVideo)').bind('click',function(){
				$('#videoProduto').attr('style','display: none !important;');
			});
		}
		$('.name-field.Video').css('display','none');
	}
});


/* Funcao de comprar um produto diretamente na prateleira, pelo botao ou pelo drag and drop */

function createCartProdNames(jqSelectorTarget,price,name){
	var spanTxtPrice 	= document.createTextNode(price);
	var spanTxtName 	= document.createTextNode(name);
	var spanPrice 		= document.createElement("SPAN");
	var spanName 		= document.createElement("SPAN");
	var img 			= document.createElement("IMG");
	var li 				= document.createElement("LI");
	
	//spanPrice
	spanPrice.setAttribute("class","preco");
	
	//spanName
	spanName.setAttribute("class","titulo");
	
	//img
	//img.setAttribute("class","remove");
	//img.setAttribute("src","img/remove.png");
	
	//appends
	spanPrice.appendChild(spanTxtPrice);
	spanName.appendChild(spanTxtName);
	
	li.appendChild(spanName);
	li.appendChild(img);
	li.appendChild(spanPrice);
	
	$(jqSelectorTarget).prepend(li);
}

/* Funcao Recursiva que pega a quantidade de items no carrinho, e exibe */
function items_carrinho(){
	$('#carrinho #menu table tbody').html('');
	var prodNome, prodPreco,precoFinal,linhasProd, html, cartPreco, prodQnt;
    var url = "/../Site/Carrinho.aspx";
    var valor = $('.amount-items-in-cart .cart-info .amount-items .amount-items-em').text();
    var totalCart = $('.amount-items-in-cart .cart-info .total-cart .total-cart-em').text().replace(".","");
    
    if(valor != "0,00" && valor != ""){
    	//url json que busca pelo nome do produto:
    	// /../buscaautocomplete/?maxRows=1&productNameContains=NOME_PRODUTO
        $('#carrinho .cartquantity').text(valor+" Produto(s)");
        $('#carrinho #menu .sub p span.value').text("R$ "+totalCart);
        
        //AJAX QUE PEGA O NOME DOS PRODUTOS NO CARRINHO
        $.ajax({
        	url : url,
        	dataType : "html",
        	success : function(data) {
        		//INCIO AJAX SUCCESS
				
				$('#carrinho #menu table tbody').html('');
				$('#topBar #menu table tbody').html('');
				linhasProd 	= $(data).find(".carrinhoTable tbody tr");
				prodNome = $(data).find(".carrinhoTable tbody tr td.produto h4 a");
				prodQnt = $(data).find(".quantidade .boxQuantidade");
				prodPreco = $(data).find(".carrinhoTable tbody tr td.preco-unitario");
				cartPreco = $(data).find(".carrinhoTable tfoot tr.subtotal .preco-total").text();
				linhasProd.each(function(i){
					//ValorUnitarioPor
					prodPreco.eq(i).find("span").each(function(){
						if( /ValorUnitarioPor/.test( $(this).attr("id") ) ){
						var preco = prodPreco.eq(i).text().split('R$');
						if(preco.length > 2){
							preco = 'R$ '+preco[2];
						}else{
							preco = prodPreco.eq(i).text();
						}
							html='<tr>';
							html+='<td class="prodName">'+prodNome.eq(i).text().replace(/(\s+\d+)|(\s\-.*)$/).substr(0, 20)+'...</td>';
							html+='<td class="prodQnt">'+prodQnt.eq(i).val()+'</td>';
							html+='<td class="prodPrz">'+preco+'</td>';
							html+='</tr>';
							$('#carrinho #menu table tbody').append(html);
							$('#topBar #menu table tbody').append(html);
						}
					});
					$('em.total-cart-em').text(cartPreco);
				});
        				
        		//FIM AJAX SUCCESS
        	}
        });
    } else {
        var t = setTimeout("items_carrinho()",1000);
    }
}
$(document).ready(function(){
	if ($("body").attr("class") == "checkout"){
		//fim do app
		$('a.buy-button').quickBuySku();
		//$('a.buy-button').quickBuy().change();
	};
	if ($("body").attr("class") == "produto"){
		prodQntyItens();
		/*$('#productInformation .buy-button').quickBuySku();*/
		//compre junto
		if($('a#lnkComprar').length > 0){
			$('a#lnkComprar').quickBuySku();
		}
	};
});

//funÃ§Ã£o para verificar se hÃ¡ produto em estoque

function hasInStock(){
	
	var url = "/../Site/Carrinho.aspx";
	
	$.ajax({
		url : url,
		dataType : "html",
		success : function(data) {
		//INCIO AJAX SUCCESS
		
			if($(data).find("body.carrinho .aviso-erro").length != 0){
				
				return false;
				
			}else{
				
				return true;
				
			}
					
		}
		
	});
	
}

//adicionar determinada quantidade de itens direto da pagina de produto
function prodQntyItens(){
	var prodQnty;
	$('#quantidadeProd .productQuantity').change(function() {
		prodQnty = $(this).val();
	});
	
	$('#quantidadeProd .productQuantity').bind('focusout', function(){
		var prodHref = $('#productInformation .buy-button').attr('href').split('&quantidade=');
		var qntyUrl = prodHref[0]+'&quantidade='+prodQnty;
		$('#productInformation .buy-button').attr('href', qntyUrl);
	});
}

$(document).ajaxComplete(function(){
	$('#menu').find('li').each(function(){
		if($(this).text() == ''){
			$(this).hide();
		}
	});
		
});

$.fn.quickBuySku = function(){
	var url, href, idSku, link, quantidade;
	var button = this;
	button.attr('href', this.attr('href')+'&quantidade=1');
	href = button.attr('href');
	button.addClass('quickBuySku');
	//funÃ§Ã£o para mudar o href para o title sku
	button.change = function(){
		href = button.attr('href');
		link = href.replace('/Site/Carrinho.aspx?idSku=', '');
		link = link.split('&quantidade=');
		idSku = link[0];
		quantidade = link[1];
	}
	button.change();
	button.bind({
		click: function(){
			button.change();
			try{
				url = "/no-cache/CarrinhoAdd.aspx"
				$.ajax({
					type: "GET",
					url: url,
					data:{
						idSku: idSku,
						quantidade: quantidade
						},
					success: function() {
						//if(hasInStock()){
							prodQntyItens()
							cartAmountItems();
							items_carrinho();
							if(!($('#menu').is(':visible'))){
								$('.hideCarrinhoMenu').click();
							}
							if($(window).scrollTop() < 20){
								$('.hideCarrinhoMenuProd').click();
								$('.hideCarrinhoMenu').click();
							}
						/*}else{
							alert('NÃ£o hÃ¡ quantidade suficiente em estoque deste produto');
						}*/
					}
				});
				if(button.attr('href').indexOf('Servico')<1){
					return false;
				}
			}catch(e){}
		}
	});
}