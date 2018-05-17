define( ["qlik", "text!./template.html","//cdn.rawgit.com/tsayen/dom-to-image/bfc00a6c5bba731027820199acd7b0a6e92149d8/dist/dom-to-image.min.js"],
	function ( qlik, template,toImage ) {
	$('<link rel="stylesheet" type="text/css" href="/extensions/codewander-screenshot/css/main.css">').appendTo("head");
	$('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">').appendTo("head");

		return {
			template: template,
			support: {
				snapshot: true,
				export: true,
				exportData: false
			},
			paint: function () {
				return qlik.Promise.resolve();
			},
			controller: ['$scope', function ( $scope ) {
				//add your rendering code here
				function convert(div){
				return ((div.tagName=="CANVAS" &&( div.width==0 || div.height==0)) || $(div).hasClass("codewander-ssbutton") || $(div).hasClass("qv-object-codewander-screenshot")  ) ? false : true;
				}
				$scope.viewmode=function(){
				$(document).remove(".codewander-ssbutton")
				}
				$scope.mode="V";
				$scope.modeToggle =function()
				{
					if ($scope.mode=="V")
					{
						ssmode();
						
					}
					else{
						viewmode();
					}
				}
				
				viewmode=function()
				{
					$(".codewander-ssbutton").remove();
					$("#codewander-setmode").html('<i class="fas fa-chart-area"></i>');
					$scope.mode="V"
				}
				ssmode=function(){
				
				$('.qv-object').prepend('<div class="qv-object-codewander-screenshot codewander-ssbutton"><button class="btn btn-primary active" ><i class="fas fa-camera"></i>Take screenshot</button></div>');
				$('.qv-object-codewander-screenshot').find('.codewander-ssbutton').first().remove();
				$('.codewander-ssbutton').click(function(){		
					var e= $(this).parent().first();
					$(e).append('<span class="codewander-watermark">screenshot by www.codewander.com</span>');
							domtoimage.toPng(e[0],{ height: $(e[0]).height(),width:$(e[0]).width(),filter:convert} ).then(function(i){
								var sshot= new Image();
								sshot.src=i;								
								saveBase64AsFile(i,"codewander.com-chart.png");
								$(".codewander-watermark").remove();
							})
							.catch(function(error){
							console.log(error);	
							$(".codewander-watermark").remove();
							});						
				})
				$scope.mode="S";
				$("#codewander-setmode").html('<i class="fa fa-eye" aria-hidden="true"></i>');
				
				}
				$scope.fullsheet = function(){
				
				
					var divs= $(document).find(".qvt-sheet");
					
					
						$.each(divs,function(i,e){
							$(e).append('<span class="codewander-watermark">screenshot by www.codewander.com</span>');
							domtoimage.toPng(e,{ height: $(e).height(),width:$(e).width(),filter:convert} ).then(function(i){
								var sshot= new Image();
								sshot.src=i;
								saveBase64AsFile(i,"codewander-fullsheet.PNG");	
								$(".codewander-watermark").remove();
							
							})
							.catch(function(error){
							console.log(error);		
							$(".codewander-watermark").remove();							
							})
						
						})
					}
					
					
					function saveBase64AsFile(base64, fileName) {

					var link = document.createElement("a");

					link.setAttribute("href", base64);
					link.setAttribute("download", fileName);
					link.click();
				}
					
				}
				
				
				
				
			]
		};

	} );

