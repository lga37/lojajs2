$(document).ready(function() {


    
	
    $("#paypal").on('click',function(e){
        e.preventDefault();
        var frete = JSON.parse(localStorage.getItem("frete"));
        var s={
            cmd:"_xclick", //_xclick=comprar agora ou doacao
            business:"voipgus@gmail.com",
            currency_code:"BRL",
            country_code:"BR",
            lc:"BR",
            charset:"UTF-8",
            no_note:0,//0 ou 1
            "return":"http://www.domain.com/shop/",
            //========================
            //item_name:"Donation",
            //item_number:"tutorial xpto", //item_name_1
            //amount:"29.00",//subtotal
            no_shipping:"1",//nao pedira endereco
            //========================
            invoice:"num pedido",
            custom:"valor custom",
            cbt:"Return to My Site",
            //bn:"PP-BuyNowBF:btn_paynowCC_LG.gif:NonHostedGuest",
            //image_url:"www.logo.jpg",
            cs:"0",//background wite
            display:"1",
            cancel_return:"http://www.domain.com/shop/",
            shipping:frete


        };
        var form = $("<form />");
        form.attr("action","https://www.paypal.com/cgi-bin/webscr");
        form.attr("method","post");
        form.attr("target","_blank");
        for(var D in s){
            hidden = $('<input type="hidden" />');
            hidden.attr("name",D);
            hidden.attr("value",s[D]);
            form.append(hidden);
        }
        
/*
        var endereco = JSON.parse(localStorage.getItem("cart"));
        var map_end = {
            name:"first_name",
            endereco:"address1",
            cidade:"city",
            estado:"state",
            email:"email",
            cep:"zip"

        }
        for(var i in endereco[0]){
            for(var j in map_end){
                arg = $('<input type="hidden" />');
                arg.attr('name', map_end[j]);
                arg.attr('value', endereco[i][j]);
                form.append(arg);
                console.log(map_end[j]+'--'+endereco[i][j]);
            }
        }
*/

        var cart = JSON.parse(localStorage.getItem("cart"));
        var map = {
            name: 'item_name',
            qtd: 'quantity',
            preco: 'amount',
            //shipping: 'shipping', //frete unitario
            //handling: 'handling', //embrulhar
            id: 'item_number'
        };

        var item_index = 0;
        for (var g in cart) {
            item_index++;
            for (var i in cart[g]) {
                if (i == 'length') continue; //se fosse form
                if (i == 'peso') continue;

                for (var k in map) {
                    if(k==i) {
                        arg = $('<input type="hidden" />');
                        arg.attr('name', map[k] + '_' + item_index);
                        arg.attr('value', cart[g][i]);
                        form.append(arg);
                        console.log(map[k]+'--'+cart[g][i]);
                    }
                }
            }
        }

        $("#forma-pagamento").html(form);
        $("#forma-pagamento").append(form);
        form.submit();
        //form.remove();

    });

    //============================================
/*
    $("#bcash").on('click',function(e){
        e.preventDefault();

        var frete = JSON.parse(localStorage.getItem("frete"));
        var s={
            email_loja:"gustavo@lga.com.br ",
            url_retorno:"",
            url_aviso:"",
            redirect:"true",
            redirect_time:"30",
            free:"num pedido",
            desconto:"0",
            acrescimo:"0",
            frete:frete

        };
        var form = $("<form />");
        form.attr("action","https://www.bcash.com.br/checkout/pay/");
        form.attr("method","post");
        form.attr("target","_blank");
        for(var D in s){
            hidden = $('<input type="hidden" />');
            hidden.attr("name",D);
            hidden.attr("value",s[D]);
            form.append(hidden);
        }
        
/*
        var endereco = JSON.parse(localStorage.getItem("cart"));
        var map_end = {
            name:"nome",
            cpf:"cpf",
            rg:"rg",
            sexo
            data_nascimento
            cliente_razao_social 
            cliente_cnpj 
            fone:"telefone",
            celular:"celular",

            endereco:"endereco",
            bairro:"bairro",
            cidade:"cidade",
            estado:"estado",
            email:"senderEmail",
            cep:"cep"

        }
        for(var i in endereco[0]){
            for(var j in map_end){
                arg = $('<input type="hidden" />');
                arg.attr('name', map_end[j]);
                arg.attr('value', endereco[i][j]);
                form.append(arg);
                console.log(map_end[j]+'--'+endereco[i][j]);
            }
        }


        var cart = JSON.parse(localStorage.getItem("cart"));
        var map = {
            name: 'produto_descricao_',
            qtd: 'produto_qtde_',
            preco: 'produto_valor_',
            id: 'produto_codigo_'
        };

        var item_index = 0;
        for (var g in cart) {
            item_index++;
            for (var i in cart[g]) {
                for (var k in map) {
                    if(k==i) {
                        valor = cart[g][i];
                        if(k=="preco"){
                            valor = valor.toFixed(2);
                        }
                        arg = $('<input type="hidden" />');
                        arg.attr('name', map[k] + item_index);
                        arg.attr('value', valor);
                        form.append(arg);
                        //console.log(map[k]+'--'+cart[g][i]);
                    }
                }
            }
        }

        $("#forma-pagamento").html(form);
        $("#forma-pagamento").append(form);
        form.submit();
        //form.remove();
    });

    //============================================


    $("#pagseguro").on('click',function(e){
        e.preventDefault();

        var frete = JSON.parse(localStorage.getItem("frete"));
        var s={
            receiverEmail:"voipgus@gmail.com",
            currency:"BRL",
            itemShippingCost:frete,
            reference:"num pedido"

        };
        var form = $("<form />");
        form.attr("action","https://pagseguro.uol.com.br/v2/checkout/payment.html");
        form.attr("method","post");
        form.attr("target","_blank");
        for(var D in s){
            hidden = $('<input type="hidden" />');
            hidden.attr("name",D);
            hidden.attr("value",s[D]);
            form.append(hidden);
        }
        
/*
        var endereco = JSON.parse(localStorage.getItem("cart"));
        var map_end = {
            name:"senderName",
            endereco:"shippingAddressStreet",
            num:"shippingAddressNumber",
            bairro:"shippingAddressDistrict",
            cidade:"shippingAddressCity",
            estado:"shippingAddressState",
            email:"senderEmail",
            fone:"senderPhone",
            ddd:"senderAreaCode",
            cep:"shippingAddressPostalCode"

        }
        for(var i in endereco[0]){
            for(var j in map_end){
                arg = $('<input type="hidden" />');
                arg.attr('name', map_end[j]);
                arg.attr('value', endereco[i][j]);
                form.append(arg);
                console.log(map_end[j]+'--'+endereco[i][j]);
            }
        }


        var cart = JSON.parse(localStorage.getItem("cart"));
        var map = {
            name: 'itemDescription',
            qtd: 'itemQuantity',
            preco: 'itemAmount',
            id: 'itemId'
        };

        var item_index = 0;
        for (var g in cart) {
            item_index++;
            for (var i in cart[g]) {
                for (var k in map) {
                    if(k==i) {
                        valor = cart[g][i];
                        if(k=="preco"){
                            valor = valor.toFixed(2);
                        }
                        arg = $('<input type="hidden" />');
                        arg.attr('name', map[k] + item_index);
                        arg.attr('value', valor);
                        form.append(arg);
                        //console.log(map[k]+'--'+cart[g][i]);
                    }
                }
            }
        }

        $("#forma-pagamento").html(form);
        $("#forma-pagamento").append(form);
        form.submit();
        //form.remove();

    });
*/
    //============================================

    function getIP(){
        $.get("http://ipinfo.io", function(r) {
            alert(r.ip);
            return r.ip;
        }, "jsonp");

    }

    //============================================
/*
    $("#dinheiro").on('click',function(e){
        e.preventDefault();

        var ip = getIP();
        alert(ip);
        var data = new Date().toUTCString();
        var cod = Math.random().toString(36).slice(2).toUpperCase().substring(1,11);
        //localStorage.clear();
        var numIP = ip || 'num IP';
        var msg = "Ped #"+ cod +" em "+ data +" por "+numIP;
        //alert(msg);
        //$('#msg-ped-fechado').empty().html(msg);
        $('h1').html('Concluido com sucesso').appendTo('.jumbotron');
        $('p').html(msg).appendTo('.jumbotron');

    });
*/
    //============================================

    $("#correios").on('click',function(e){
        e.preventDefault();
        alert('correios');

    }); 

    //============================================

    function codeLatLng(lat,lng) {
      var geocoder = new google.maps.Geocoder();

      var latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
      geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            //Copacabana, Rio de Janeiro - RJ, Brasil 
            console.log(results[1].formatted_address);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    }
    //============================================

    $("#geoip").on('click',function(e){
        e.preventDefault();
        $.get("http://ipinfo.io", function(data) {
            console.log(data.ip, data.loc);
            $('input[name="cidade"]').val(data.city);
            $('input[name="endereco"]').focus();
            //par lat long
            var loc = data.loc;
            var l = loc.split(",");
            codeLatLng(l[0],l[1]);

        }, "jsonp");

    }); 

    //============================================

    $("#geohtml5").on('click',function(e){
        e.preventDefault();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position){//funcao de sucesso
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    codeLatLng(pos.lat,pos.lng);
                },
                function(error){
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            alert("User denied the request for Geolocation.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            alert("Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            alert("The request to get user location timed out.");
                            break;
                        case error.UNKNOWN_ERROR:
                            alert("An unknown error occurred.");
                            break;
                    }
                }
            );

        } else {
            alert("nao suporta");
        }

    }); 



	//login,esqueci ------------------------



	//contatos ------------------------
/*	$('#pessoaJuridicaForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                nome: {
                    row: '.col-xs-8',
                    validators: {
                        notEmpty: {
                            message: 'The first name is required'
                        }
                    }
                },

                cnpj: {
                    row: '.col-xs-6',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        },
                        vat: {
                            enabled: true,
                            country: 'BR',
                            message: 'cnpj obrigat'                                
                        }
                    }
                },

                ie: {
                    row: '.col-xs-6',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },

                abertura: {
                    row: '.col-xs-6',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                }

            }
        })
        .on('input keyup', '[name="cnpj"]', function() {
            switch ($(this).val().length) {
                // cnpj
                case 14:
                default:
                    $('#pessoaJuridicaForm')
                        // Disable the id validator
                        .formValidation('enableFieldValidators', 'cnpj', false, 'id')
                        // Enable the vat one
                        .formValidation('enableFieldValidators', 'cnpj', true, 'vat')
                        // Revalidate field
                        .formValidation('revalidateField', 'cnpj');
                    break;

            }
        });

*/

/*
	//contatos ------------------------
	$('#pessoaFisicaForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                nome: {
                    row: '.col-xs-8',
                    validators: {
                        notEmpty: {
                            message: 'The first name is required'
                        }
                    }
                },
                sexo: {
                    row: '.col-xs-6',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },

                cpf: {
                    row: '.col-xs-6',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        },
                        id: {
                            enabled: true,
                            country: 'BR',
                            message: 'CPF obrigat'                                
                        }
                    }
                },

                rg: {
                    row: '.col-xs-6',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },

                nascimento: {
                    row: '.col-xs-6',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                }

            }
        })
        .on('input keyup', '[name="cpf"]', function() {
            switch ($(this).val().length) {
                // cnpj
                case 14:
                    $('#pessoaFisicaForm')
                        // Disable the id validator
                        .formValidation('enableFieldValidators', 'cpf', false, 'id')
                        // Enable the vat one
                        .formValidation('enableFieldValidators', 'cpf', true, 'vat')
                        // Revalidate field
                        .formValidation('revalidateField', 'cpf');
                    break;

                // User is trying to put an ID number
                case 11:
                default:
                    $('#pessoaFisicaForm')
                        .formValidation('enableFieldValidators', 'cpf', true, 'id')
                        .formValidation('enableFieldValidators', 'cpf', false, 'vat')
                        .formValidation('revalidateField', 'cpf');
                    break;
            }
        });
*/

	//contatos ------------------------
/*
	$('#enderecoForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                cep: {
                    row: '.col-xs-4',
                    validators: {
                        notEmpty: {
                            message: 'The first name is required'
                        }
                    }
                },
                endereco: {
                    row: '.col-xs-6',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },

                num: {
                    row: '.col-xs-2',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },

                bairro: {
                    row: '.col-xs-6',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },
                cidade: {
                    row: '.col-xs-6',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },

                estado: {
                    row: '.col-xs-6',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                }
            }
        })

        .on('keyup', '[name="cep"]', function() {

            var cep = $(this).val();

            if(cep.length == 8){
                $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(data) {
                    if (!("erro" in data)) {
                        $('input[name="endereco"]').val(data.logradouro);
                        $('input[name="bairro"]').val(data.bairro);
                        $('input[name="cidade"]').val(data.localidade);
                        $('select[name="estado"] option[value="'+data.uf+'"]').prop('selected',true);
                        $('input[name="num"]').focus();
                    } else {
                        alert('erroooo');
                    }
                });    
            }
        })
        .on('success.form.fv', function(e) {
            e.preventDefault();
            // Some instances you can use are
            var $form = $(e.target),        // The form instance
                fv    = $(e.target).data('formValidation'); 
                // FormValidation instance
                //var end = JSON.stringify($form.serializeArray());

            var o = new Object();
            o.cep = $form.find('input[name="cep"]').val();
            o.endereco = $form.find('input[name="endereco"]').val();
            o.num = $form.find('input[name="num"]').val();
            o.bairro = $form.find('input[name="bairro"]').val();
            o.cidade = $form.find('input[name="cidade"]').val();
            o.estado = $form.find('select[name="estado"] > option:selected').val();
            

            localStorage.setItem('endereco',JSON.stringify(o));    
            $('#menu-tab-cadastro li:eq(1) a').tab('show');

        });



	//contatos ------------------------
    var MAX_OPTIONS = 5;
    $('#canaisContato')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                site: {
                    validators: {
                        notEmpty: {
                            message: 'Informe o site da empresa'
                        }
                    }
                },
                'tels[]': {
                    validators: {
                        notEmpty: {
                            message: 'Informe o telefone'
                        },
                        stringLength: {
                            max: 100,
                            message: 'The option must be less than 100 characters long'
                        }
                    }
                },
                'emails[]': {
                    validators: {
                        notEmpty: {
                            message: 'Informe o email'
                        },
                        stringLength: {
                            max: 100,
                            message: 'The option must be less than 100 characters long'
                        }
                    }
                }
            }
        })
        //==============================================
        .on('click', '.addButtonEmail', function() {
            var $template = $('#emailsTemplate'),
                $clone    = $template
                                .clone()
                                .removeClass('hide')
                                .removeAttr('id')
                                .insertBefore($template),
                $option   = $clone.find('[name="emails[]"]');

            // Add new field
            $('#surveyForm').formValidation('addField', $option);
        })

        // Remove button click handler
        .on('click', '.removeButtonEmail', function() {
            var $row    = $(this).parents('.group-emails'),
                $option = $row.find('[name="emails[]"]');
            // Remove element containing the option
            $row.remove();
            // Remove field
            $('#surveyForm').formValidation('removeField', $option);
        })
        // Called after adding new field
        .on('added.field.fv', function(e, data) {
            // data.field   --> The field name
            // data.element --> The new field element
            // data.options --> The new field options

            if (data.field === 'emails[]') {
                if ($('#surveyForm').find(':visible[name="emails[]"]').length >= MAX_OPTIONS) {
                    $('#surveyForm').find('.addButtonEmail').attr('disabled', 'disabled');
                }
            }
        })
        // Called after removing the field
        .on('removed.field.fv', function(e, data) {
           if (data.field === 'emails[]') {
                if ($('#surveyForm').find(':visible[name="emails[]"]').length < MAX_OPTIONS) {
                    $('#surveyForm').find('.addButtonEmail').removeAttr('disabled');
                }
            }
        })
        //==============================================

        // Add button click handler
        .on('click', '.addButtonTel', function() {
            var $template = $('#telsTemplate'),
                $clone    = $template
                                .clone()
                                .removeClass('hide')
                                .removeAttr('id')
                                .insertBefore($template),
                $option   = $clone.find('[name="tels[]"]');

            // Add new field
            $('#surveyForm').formValidation('addField', $option);
        })
        // Remove button click handler
        .on('click', '.removeButton', function() {
            var $row    = $(this).parents('.form-group'),
                $option = $row.find('[name="tels[]"]');
            // Remove element containing the option
            $row.remove();

            // Remove field
            $('#surveyForm').formValidation('removeField', $option);
        })
        // Called after adding new field
        .on('added.field.fv', function(e, data) {
            // data.field   --> The field name
            // data.element --> The new field element
            // data.options --> The new field options

            if (data.field === 'tels[]') {
                if ($('#surveyForm').find(':visible[name="tels[]"]').length >= MAX_OPTIONS) {
                    $('#surveyForm').find('.addButtonTel').attr('disabled', 'disabled');
                }
            }
        })
        // Called after removing the field
        .on('removed.field.fv', function(e, data) {
           if (data.field === 'tels[]') {
                if ($('#surveyForm').find(':visible[name="tels[]"]').length < MAX_OPTIONS) {
                    $('#surveyForm').find('.addButtonTel').removeAttr('disabled');
                }
            }
        });


	//privacidade ------------------------
    $('#registrationForm').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'The confirm password is required'
                    },
                    identical: {
                        field: 'password',
                        message: 'The password and its confirmation one have to be the same'
                    }
                }
            },
            agree: {
                // The plugin will ignore the hidden field
                // By setting excluded: false, the field will be validated as usual
                excluded: false,
                validators: {
                    callback: {
                        message: 'You must agree with the terms and conditions',
                        callback: function(value, validator, $field) {
                            return value === 'yes';
                        }
                    }
                }
            }
        }
    });
    // Update the value of "agree" input when clicking the Agree/Disagree button
    $('#agreeButton, #disagreeButton').on('click', function() {
        var whichButton = $(this).attr('id');

        $('#registrationForm')
            .find('[name="agree"]')
                .val(whichButton === 'agreeButton' ? 'yes' : 'no')
                .end()
            // Revalidate the field manually
            .formValidation('revalidateField', 'agree');
    });
*/

});//$(document).ready(function()