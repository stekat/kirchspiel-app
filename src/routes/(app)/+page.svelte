<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="row mx-5">
	<div class="col">
		<h1>Backend Kirchspiel App</h1>
		<h5>Hier können Termine angelegt, Nachrichten gesendet und Einstellungen angepasst werden.</h5>
	</div>
</div>
<div class="row mx-5 mt-4">
	<div class="col">
		<h5>Direkt loslegen mit</h5>
		<ul class="nav flex-column">
			<li><a href="{base}/events" class="nav-link link-dark"><i class="fa-solid fa-calendar-plus px-3"></i><span>Veranstaltung hinzufügen ...</span></a></li>
			<li><a href="{base}/messages" class="nav-link link-dark"><i class="fa-solid fa-paper-plane px-3"></i><span>Nachricht versenden ...</span></a></li>
			<li><a href="{base}/settings" class="nav-link link-dark"><i class="fa-solid fa-sliders px-3"></i><span>Einstellungen anpassen ...</span></a></li>
		</ul>
	</div>
</div>
