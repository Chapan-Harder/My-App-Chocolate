<script lang="ts">
	import Slides from '../components/Slides.svelte';

	let which = 0;
	const changeWhich = (data: number) => {
		if (which == 2 && data == +1) {
			which = 0;
		} else if (which == 0 && data == -1) {
			which = 2;
		} else {
			which += data;
		}
	};
	$: {
		console.log(which);
	}
</script>

<!-- Main-App Text Start-->
<h1
	class="flex justify-center items-center mt-24 mb-3 font-sans font-big-bold text-[#f1d5b2] capitalize text-2xl 2xl:text-7xl xl:text-6xl md:text-4xl"
>
	<span class="transition hover:-translate-y-1">The</span>&nbsp;<span
		class="transition hover:-translate-y-1">most</span
	>&nbsp;<span class="transition hover:-translate-y-1 font-serif italic text-[#dcb9cd]"
		>delicious</span
	>&nbsp;<span class="transition hover:-translate-y-1 font-serif italic text-[#dcb9cd]">thing</span>
</h1>
<!-- Main-App Text End-->

<!-- Show Pictures And Buttons Start -->
<section class="flex justify-center items-center relative h-[94px]">
	<div
		class="flex absolute -top-0 border-[3px] border-[#f1d5b2] backdrop-blur-[2px] rounded-full py-5 px-3 md:-top-8"
	>
		<!-- Button Left Start -->
		<button
			on:click={() => changeWhich(+1)}
			class="fill-[#dcb9cd] size-8 flex justify-center mr-5 2xl:mr-32 xl:mr-24 md:mr-12 md:size-10 transition ease-in-out delay-100 hover:fill-[#f1d5b2] hover:scale-125"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
				><path
					d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
				/></svg
			>
		</button>
		<!-- Button Left End -->

		<h1
			class="font-serif font-big-bold text-[#f1d5b2] capitalize 2xl:text-3xl xl:text-2xl md:text-xl transition ease-in-out delay-100 hover:text-[#dcb9cd] hover:scale-110 cursor-pointer"
		>
			just look
		</h1>

		<!-- Button Right Start -->
		<button
			on:click={() => changeWhich(-1)}
			class="fill-[#dcb9cd] size-8 flex justify-center ml-5 2xl:ml-32 xl:ml-24 md:ml-12 md:size-10 transition ease-in-out delay-100 hover:fill-[#f1d5b2] hover:scale-125"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
				><path
					d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
				/></svg
			>
		</button>
		<!-- Button Right End -->
	</div>
</section>

<Slides {which} />
