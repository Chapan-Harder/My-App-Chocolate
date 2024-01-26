<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import TheLine from '../../components/The-Line.svelte';
</script>

<section class="bg-[#152235] min-h-screen grid p-11">
	<div
		class="bg-[#2a3a4f] rounded-tr-3xl rounded-bl-3xl px-10 pt-6 border-solid border-[3px] border-[#3b4f6b] lg:px-24 mx-0 lg:mx-20"
	>
		<Navbar />

		<h1
			class="flex justify-center h-8 font-sans font-big-bold text-5xl md:text-7xl capitalize mt-24 mb-16 text-[#f1d5b2]"
		>
			<span class="transition hover:-translate-y-1">about</span>&nbsp;<span
				class="transition hover:-translate-y-1 font-serif italic text-[#dcb9cd]">me</span
			>
		</h1>

		<TheLine />

		<section></section>

		<Footer />
	</div>
</section>
