<script lang="ts">
	import logo from '$lib/images/martinLutherLogo.png';
	// import Header from './Header.svelte';
</script>

<div class="container-fluid">
	<nav class="navbar sticky-top mt-3">
		<div class="navbar-brand col-sm-3 col-md-2 mr-0">
			<img src={logo} alt="Kirchspiel Dresden Neustadt" />
		</div>
		<ul class="navbar-nav px-3">
			<li class="nav-item"><a href="/logout" class="nav-link link-dark"><i class="fa-solid fa-right-from-bracket px-2"></i>Abmelden</a></li>
		</ul>
	</nav>
	<main class="mt-3 d-flex flex-nowrap">
		<div class="d-flex flex-column flex-shrink-0 mt-4" >
			<ul class="nav flex-column">
				<li class="nav-item"><a href="/events" class="nav-link link-dark"><i class="fa-solid fa-calendar-days px-3"></i><span>Veranstaltungen</span></a></li>
				<li class="nav-item"><a href="/messages" class="nav-link link-dark"><i class="fa-solid fa-message px-3"></i><span>Nachrichten</span></a></li>
				<li class="nav-item"><a href="/settings" class="nav-link link-dark"><i class="fa-solid fa-sliders px-3"></i><span>Einstellungen</span></a></li>
			</ul>
		</div>
		<div class="mx-5 mt-4 w-100">
			<slot />
		</div>
  </main>
</div>

<style>
</style>
