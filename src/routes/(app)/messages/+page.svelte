<script lang="ts">
    import { goto } from '$app/navigation';

	function onNewMessageClick():void {
		goto("/messages/new")
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
				<h5>Nachrichten</h5>
			</div>
			<div class="col-8 col-sm-auto d-flex text-right">
				<button on:click|once={onNewMessageClick} class="btn btn-outline-secondary"><i class="fa-solid fa-paper-plane"></i> neue Nachricht</button>
			</div>
		</div>
	</div>
	<div class="card-body">
		<table class="table table-sm table-striped">
			<thead>
				<tr>
					<th>Betreff</th>
					<th>Nachricht</th>
					<th>Kanal</th>
					<th>Absender</th>
					<th>Datum</th>
					<th>Aktion</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Vorstellung der Konfirmanden</td>
					<td>Die neuen Konfirmanden werden ...</td>
					<td>Konfi</td>
					<td>Pfarrer 1</td>
					<td>01.02.2024 10:00 Uhr</td>
					<td><i class="fa-solid fa-trash"></i></td>
				</tr>
				<tr>
					<td>Vorstellung Junge Gemeinde</td>
					<td>Die junge Gemeinde wird sich ...</td>
					<td>Jugend</td>
					<td>Gemeindepädagoge 1</td>
					<td>01.02.2024 12:00 Uhr</td>
					<td><i class="fa-solid fa-trash"></i></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>