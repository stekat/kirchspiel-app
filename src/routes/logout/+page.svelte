<script lang="ts">
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';

	function onReturnToLoginClick():void {
		goto(`${base}/login`);
	}

</script>

<div class="container">
    <div class="row align-items-center justify-content-center min-vh-100">
        <div class="col-xxl-4">
            <div class="card p-4">
                <div class="row">
                    <div class="col text-center">
                        <h3>Auf Wiedersehen!</h3>
                        <p>Die Abmeldung ist erfolgreich gewesen.</p>
                        <button on:click|once={onReturnToLoginClick} class="btn btn-primary mt-3" name="returnToLogin"><i class="fa-solid fa-chevron-left"></i> Zurück zur Anmeldung</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>