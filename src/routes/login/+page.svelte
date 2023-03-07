<script lang="ts">
    import { goto } from '$app/navigation';
    import logo from '$lib/images/martinLutherLogo.png';

	function onLoginClick():void {

        // const url = new URL(window.location.href);
        // console.log(url.origin);
        // goto(url)

    // goto(url.href);
    // // or this, if you do not want a new history entry:
    // goto(url.href, { replaceState: true });
        goto("/");
	}
</script>

<div class="container">
    <div class="row align-items-center justify-content-center min-vh-100">
        <div class="col-xxl-4">
            <div class="mb-4 d-flex justify-content-center">
                <img src={logo} alt="Laurentius" />
            </div>
            <div class="card p-4">
                <div class="row">
                    <div class="col"><h5>Anmelden</h5></div>
                </div>
                <form>
                    <div class="mb-3">
                        <input class="form-control" type="text" placeholder="Benutzer">
                    </div>
                    <div class="mb-3">
                        <input class="form-control" type="password" placeholder="Passwort">
                    </div>
                    <div class="mb-3">
                        <button on:click|once={onLoginClick} class="btn btn-primary w-100">Anmelden</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>