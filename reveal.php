<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script type="text/javascript" src="js/lib/jquery.js"></script>
<script type="text/javascript" src="js/lib/reveal.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>

<link rel="stylesheet" type="text/css" href="css/styles.css" />
<link rel="stylesheet" type="text/css" href="css/reveal.css" />

<title>Pauline Dupraz | freelance web design & front-end development</title>
</head>
<body class="project reveal">
<div class="main">

	<?php require_once('navbar.php'); ?>

	<div class="main-content text-center">
		
		<div class="reveal">
			<div class="reveal-container reveal-x">
				<div class="dragger">
					<span class="left-arrow" UNSELECTABLE="on"><</span>
					<span class="right-arrow" UNSELECTABLE="on">></span>
				</div>
				<ul class="wrapper">
					<li class="container-inner"><img src="images/reveal_1.jpeg" /></li>
					<li class="container-inner"><img src="images/reveal_2.jpeg" /></li>
					<li class="container-inner"><img src="images/reveal_3.jpeg" /></li>
					<li class="container-inner"><img src="images/reveal_4.jpeg" /></li>
					<li class="container-inner"><img src="images/reveal_6.jpeg" /></li>
				</ul>
			</div>
			<div class="external-nav">
				<div class="prev">PREVIOUS</div>
				<div class="next">NEXT</div>
				<div class="animToTop">ANIMATE TO 0%</div>
				<div class="animToBottom">ANIMATE TO 100%</div>
			</div>
			
			<div class="reveal-container reveal-y">
				<div class="dragger"><span class="left-arrow" UNSELECTABLE="on"><</span><span class="right-arrow" UNSELECTABLE="on">></span></div>
				<ul class="wrapper">
					<li class="container-inner"><img src="images/reveal_5.jpeg" /></li>
					<li class="container-inner"><img src="images/reveal_7.jpeg" /></li>
					<li class="container-inner"><img src="images/reveal_8.jpeg" /></li>
					<li class="container-inner"><img src="images/reveal_9.jpeg" /></li>
				</ul>
			</div>
		</div>
		
	</div>
</div>
<?php require_once('about.php'); ?>

<?php require_once('work.php'); ?>


<div class="shadow hidden"></div>
<div class="main-shadow"></div>
<div class="pattern"></div>
</body>
</html>