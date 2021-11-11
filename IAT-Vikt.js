define(['pipAPI', 'https://toni2110.github.io/IAT-Weight/IAT-Vikt-quiat10.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'överviktig', //Will appear in the data.
			title : {
				media : {word : 'Överviktig'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		   	{image : '1_F_COLOR.jpg'}, 
    			{image : '2_F_COLOR.jpg'}, 
    			{image : '3_F_COLOR.jpg'}, 
			{image : '4_F_COLOR.jpg'}, 
    			{image : '5_F_COLOR.jpg'},
			{image : 'W_1_F.jpg'},
			{image : 'w_2_F.jpg'},
			{image : 'W_3_F.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'normalviktig', //Will appear in the data.
			title : {
				media : {word : 'Normalviktig'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    			{image : '1_S_COLOR.jpg'}, 
    			{image : '2_S_COLOR.jpg'}, 
    			{image : '3_S_COLOR.jpg'}, 
    			{image : '4_S_COLOR.jpg'}, 
			{image : '5_S_COLOR.jpg'}, 
			{image : 'W_1_s.JPG'}, 
			{image : 'w_2_S.jpg'}, 
    			{image : 'W_3_S.jpg'}			
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://toni2110.github.io/IAT-Weight/IAT-bilderna'
		} 
	});
});
