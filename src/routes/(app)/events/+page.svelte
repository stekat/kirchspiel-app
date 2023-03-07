<script lang="ts">
    import { goto } from '$app/navigation';

	function onNewEventClick():void {
		goto("/events/new")
	}

</script>

<!-- <svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head> -->

<div class="card">
	<div class="card-header">
		<div class="row d-flex justify-content-between align-items-center">
			<div class="col-4 col-sm-auto d-flex align-items-center">
				<h5>Veranstaltungen</h5>
			</div>
			<div class="col-8 col-sm-auto d-flex text-right">
				<button on:click|once={onNewEventClick} class="btn btn-outline-secondary"><i class="fa-solid fa-plus"></i> Hinzufügen</button>
			</div>
		</div>
	</div>
	<div class="card-body">
		<table class="table table-sm table-striped">
			<thead>
				<tr>
					<th>Titel</th>
					<th>Start</th>
					<th>Ende</th>
					<th>Kategorie</th>
					<th>Ort</th>
					<th>Aktion</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Vorstellung der Konfirmanden</td>
					<td>01.01.2024 10:00 Uhr</td>
					<td>01.01.2024 12:00 Uhr</td>
					<td>Jugend</td>
					<td>Gemeindesaal</td>
					<td><i class="fa-solid fa-trash"></i><i class="fa-solid fa-pen-to-square px-3"></i></td>
				</tr>
				<tr>
					<td>Vorstellung Junge Gemeinde</td>
					<td>01.02.2024 10:00 Uhr</td>
					<td>01.02.2024 12:00 Uhr</td>
					<td>Jugend</td>
					<td>Gemeindesaal</td>
					<td><i class="fa-solid fa-trash"></i><i class="fa-solid fa-pen-to-square px-3"></i></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>