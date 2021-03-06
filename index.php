<!-- /* ***********************************
        COPYRIGHT (C) Nicholas Chan 2014
        All rights reserved worldwide
              nicwaichan.@gmail.com
      *********************************** */ -->

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<meta name="description" content="for TWA Test"></meta>
	<meta name="author" content="Nicholas Chan"></meta>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<link href="images/tick.png" sizes="144x144" rel="apple-touch-icon-precomposed"></link>
	<link href="images/tick.png" sizes="114x114" rel="apple-touch-icon-precomposed"></link>
	<link href="images/tick.png" sizes="72x72" rel="apple-touch-icon-precomposed"></link>
	<link href="images/tick.png" rel="apple-touch-icon-precomposed"></link>
	<link href="images/tick.png" rel="shortcut icon"></link>
	<!--link href="images/tickIco.png" rel="apple-touch-icon-precomposed"></link>
	<link href="images/tickIco.png" rel="shortcut icon"></link-->
  
	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300' rel='stylesheet' type='text/css'>
	<link href='https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css', rel='stylesheet'>

	<!--[if lt IE 9]>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js"></script>
	<![endif]-->

	<title>Welcome</title>
</head>

<body>
	<div id="progressBox">
		<div id="progressHeader">
			Progress
			<div id="closeBtn">
				&#215;		<!--&#215; "X" symbol-->
			</div>
		</div>
		<progress class="progressBar">
			<div class="progress-bar">
				<span id="ieProgressBar"></span>
			</div>
		</progress>
		<div id="countVal"></div>
	</div>
	<button id="resetBtn" type="button">Reset <i class="fa fa-backward"></i></button>
	<button id="pauseBtn" type="button">Pause <i class="fa fa-pause"></i></button>
	<button id="showBoxBtn" type="button">Pause <i class="fa fa-eject"></i></button>

	<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.1/modernizr.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.3.1/holder.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>

</body>
</HTML>


