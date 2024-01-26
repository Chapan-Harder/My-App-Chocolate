<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import TheLine from '../components/The-Line.svelte';
	import { page } from '$app/stores';
</script>

<section class="bg-[#152235] min-h-screen grid p-11">
	<div
		class="bg-[#2a3a4f] rounded-tr-3xl rounded-bl-3xl px-10 pt-6 border-solid border-[3px] border-[#3b4f6b] lg:px-24 mx-0 lg:mx-20"
	>
		<Navbar />

		<!-- Mian-App Satrt -->
		<main>
			<slot />
		</main>

		<!-- Mian-App Satrt -->

		<TheLine hidden={$page.url.pathname == '/'} />
		<Footer />
	</div>
</section>
