<script lang="ts">
	import TheLine from '../../components/The-Line.svelte';
	import MePicture from '../../lib/pictures/Me.jpg';
</script>

<h1
	class="flex justify-center font-sans font-big-bold text-5xl md:text-7xl capitalize mt-24 mb-0 text-[#f1d5b2]"
>
	<span class="transition hover:-translate-y-1">about</span>&nbsp;<span
		class="transition hover:-translate-y-1 font-serif italic text-[#dcb9cd]">me</span
	>
</h1>

<TheLine />

<section class="flex justify-center mb-32 max-md:mb-12">
	<img src={MePicture} alt="Me_Picture" class="max-md:hidden h-96 shadow-md shadow-[#dcb9cd]" />

	<div class="justify-center pl-10 md:w-[460px] max-md:pl-0">
		<p class="font-sans font-big-bold text-[#f1d5b2] text-base">
			<span class="text-xl">Hi My name is Mohsen Heidari(Chapan Harder)</span>.<br />creativity and
			technical execution. Mohsen is proficient in a variety of web development technologies,
			including HTML, CSS, JavaScript, and Svelet. He is also an experienced game developer with a
			strong understanding of game engines such as Bevy Engine. Mohsen is passionate about sharing
			his knowledge and helping others succeed. He is ...<br />
		</p>
		<a
			href="https://github.com/Chapan-Harder"
			class="flex justify-center text-[#dcb9cd] text-2xl font-serif font-semi-bold uppercase transition ease-in-out hover:scale-110 hover:text-[#f1d5b2]"
			>link</a
		>
	</div>
</section>
