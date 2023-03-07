<script lang="ts">
    import { goto } from '$app/navigation';

	function onSaveEventClick():void {
		goto("/events/")
	}

    let questions = [
		{ id: 1, text: `Gottesdienst` },
		{ id: 2, text: `Jugend` },
		{ id: 3, text: `Gemeinde` }
	];

    let selected: number;
</script>

<div class="card">
    <div class="card-header">
		<div class="row d-flex justify-content-between align-items-center">
			<div class="col-4 col-sm-auto d-flex align-items-center">
				<h5>Neues Ereignis anlegen</h5>
			</div>
			<div class="col-8 col-sm-auto d-flex text-right">
                <button on:click|once={onSaveEventClick} class="btn btn-outline-secondary"><i class="fa-solid fa-floppy-disk"></i> Speichern</button>
            </div>
		</div>
	</div>
	<div class="card-body">
		<form>
            <div class="row">
                <div class="col-12 mb-3">
                    <label class="form-label" for="event-title">Titel</label>
                    <input class="form-control" type="text" placeholder="Titel">
                </div>
                <div class="col-12 mb-3">
                    <label class="form-label" for="event-description">Beschreibung</label>
                    <textarea class="form-control" placeholder="Beschreibung"></textarea>
                </div>
                <div class="col-sm-6 mb-3">
                    <label class="form-label" for="start-date">Start Datum</label>
                    <input class="form-control" type="text" placeholder="Start Datum, z.B. 01.01.2001" />
                </div>
                <div class="col-sm-6 mb-3">
                    <label class="form-label" for="start-time">Start Uhrzeit</label>
                    <input class="form-control" type="text" placeholder="Uhrzeit, z.B. 10:30" />
                </div>
                <div class="col-sm-6 mb-3">
                    <label class="form-label" for="end-date">Ende Datum</label>
                    <input class="form-control" type="text" placeholder="Ende Datum, z.B. 01.01.2001" />
                </div>
                <div class="col-sm-6 mb-3">
                    <label class="form-label" for="end-time">Ende Uhrzeit</label>
                    <input class="form-control" type="text" placeholder="Uhrzeit, z.B. 10:30" />
                </div>
                <div class="col-sm-6 mb-3">
                    <label class="form-label" for="category">Kategorie</label>
                    <select value={selected} class="form-select">
                        {#each questions as question}
                            <option value={question}>
                                {question.text}
                            </option>
                        {/each}
                    </select>
                </div>
                <div class="col-sm-6 mb-3">
                    <label class="form-label" for="location">Ort</label>
                    <input class="form-control" type="text" placeholder="Ort">
                </div>
            </div>
        </form>
	</div>
</div>