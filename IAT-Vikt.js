define(['pipAPI', 'https://toni2110.github.io/IAT-Weight/IAT-Vikt-quiat10.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Black people', //Will appear in the data.
			title : {
				media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : '1_FM.jpg'}, 
    			{image : '2_FM.jpg'}, 
    			{image : '3_FM.jpg'}, 
    			{image : '1_FK.jpg'}, 
    			{image : '2_FK.jpg'}, 
    			{image : '3_FK.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White people', //Will appear in the data.
			title : {
				media : {word : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : '1_SM.jpg'}, 
    			{image : '2_SM.jpg'}, 
    			{image : '3_SM.jpg'}, 
    			{image : '1_SK.jpg'}, 
    			{image : '2_SK.jpg'}, 
    			{image : '3_SK.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://toni2110.github.io/IAT-Weight/IAT-bilderna/'
		} 
	});
});
