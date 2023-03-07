<script lang="ts">
    import { goto } from '$app/navigation';

	function onSendMessageClick():void {
		goto("/messages/")
	}

    let questions = [
		{ id: 1, text: `Konfi` },
		{ id: 2, text: `Jugend` },
		{ id: 3, text: `Gemeinde` }
	];

    let selected: number;
</script>

<div class="card">
    <div class="card-header">
		<div class="row d-flex justify-content-between align-items-center">
			<div class="col-4 col-sm-auto d-flex align-items-center">
				<h5>Neue Nachricht senden</h5>
			</div>
			<div class="col-8 col-sm-auto d-flex text-right">
                <button on:click|once={onSendMessageClick} class="btn btn-outline-secondary"><i class="fa-solid fa-paper-plane"></i> versenden</button>
            </div>
		</div>
	</div>
	<div class="card-body">
		<form>
            <div class="row">
                <div class="col-12 mb-3">
                    <label class="form-label" for="message-subject">Betreff</label>
                    <input class="form-control" type="text" placeholder="Betreff">
                </div>
                <div class="col-12 mb-3">
                    <label class="form-label" for="message-body">Nachricht</label>
                    <textarea class="form-control" placeholder="Nachricht"></textarea>
                </div>
                <div class="col-sm-6 mb-3">
                    <label class="form-label" for="category">Kanal</label>
                    <select value={selected} class="form-select">
                        {#each questions as question}
                            <option value={question}>
                                {question.text}
                            </option>
                        {/each}
                    </select>
                </div>
                <div class="col-sm-6 mb-3">
                    <label class="form-label" for="expiry-date">Ablaufdatum</label>
                    <input class="form-control" type="text" placeholder="Ablaufdatum, z.B. 01.01.2001" />
                </div>
            </div>
        </form>
	</div>
</div>