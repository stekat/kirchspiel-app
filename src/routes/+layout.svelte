<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import 'bootstrap/dist/css/bootstrap.css';
	import './styles.css';

	// import { isSignedIn } from '$lib/store'
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
    // import { page } from '$app/stores'

	// onMount(() => {
	// 	console.log(`onMount - page is ${$page.url}`);
	// });

  
	// beforeNavigate(({  to, cancel }) => {
	// 	console.log(`beforeNavigate - navigate to ${to?.url}`);
  	// });

	$: if($navigating) {
		let toUrl = $navigating.to?.url;
		console.log(`navigating - navigate to ${toUrl}`);
	};

	// $: if (browser && !$isSignedIn && $page.url.pathname !== '/auth/sign-in') {
    //     console.log(
    //         'we are running in the browser, not signed in, and not on the sign in page, we are going to the sign in page'
    //     )
    //     goto('/auth/sign-in')
    // } else if (browser && $isSignedIn && $page.url.pathname === '/auth/sign-in') {
    //     console.log(
    //         'we are running in the browser, signed in, and on the sign in page, we are going to the home page'
    //     )
    //     goto('/')
    // }

</script>
	<main class="main">
		<slot />
	</main>
<style>
</style>