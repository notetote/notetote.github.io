const fableNav = `<nav class="hide"><sidebar class="flex flex-column"><top><topinfo class="flex flex-row flex-responsive flex-space-between flex-center-h flex-center-v fix-height"><i class="fa fa-close pointer" onclick="navOut()"></i><span class="version"></span></topinfo></top><bottom class="flex flex-column"><section class="flex flex-row"><btn class="flex-grow active"><i class="fa fa-auto"></i></btn><btn class="flex-grow"><i class="fa fa-day"></i></btn><btn class="flex-grow"><i class="fa fa-night"></i></btn></section><section class="flex flex-column"><a class="flex" href="/"><i class="fa fa-home"></i><span>Home</span></a><a class="flex" href="contributors"><i class="fa fa-group"></i><span>Contributors</span></a><a class="flex" href="feedback"><i class="fa fa-feedback"></i><span>Feedback</span></a><a class="flex" href="settings"><i class="fa fa-settings"></i><span>Settings</span></a><a class="flex" href="about"><i class="fa fa-about"></i><span>About</span></a></section><section class="flex flex-column"><a class="flex" href="android"><i class="fa fa-download-filled"></i><span>Get Android App</span></a><a class="flex" href="telegram"><i class="fa fa-telegram"></i><span>Join Telegram Group</span></a></section></bottom></sidebar><backdrop onclick="navOut()"></backdrop></nav>`;
localRes("fable_nav",fableNav);