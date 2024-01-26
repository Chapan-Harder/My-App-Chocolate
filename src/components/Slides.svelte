<script lang="ts">
	import img1 from '$lib/pictures/pexels-lisa-fotios-918327.jpg';
	import img2 from '$lib/pictures/pexels-juan-pablo-serrano-arenas-813786.jpg';
	import img3 from '$lib/pictures/pexels-susanne-jutzeler-sujufoto-1693027.jpg';

	export let which: number;

	const where = (data: number) => {
		switch (data) {
			case -2:
				return 'twoLeft';
			case -1:
				return 'left';
			case 0:
				return 'mid';
			case 1:
				return 'right';
			case 2:
				return 'twoRight';
			default:
				break;
		}
	};
</script>

<section
	class="flex justify-center h-[160px] 2xl:px-44 xl:px-24 xl:h-[432px] md:h-[350px] mt-12 md:mt-0 max-md:mb-28"
>
	<div
		class="flex h-full items-center w-full relative overflow-y-hidden overflow-x-hidden rounded-lg"
	>
		<!-- 0 -->
		<div
			data-where={where(which - 0)}
			class="absolute flex items-center h-full w-full transition-all duration-1000 data-[where=twoLeft]:-left-[200%] data-[where=left]:-left-full data-[where=mid]:left-0 data-[where=right]:left-full data-[where=twoRight]:left-[200%]"
		>
			<img class="w-full" src={img1} alt="" />
		</div>

		<!-- 1 -->
		<div
			data-where={where(which - 1)}
			class="absolute flex items-center h-full w-full transition-all duration-1000 data-[where=twoLeft]:-left-[200%] data-[where=left]:-left-full data-[where=mid]:left-0 data-[where=right]:left-full data-[where=twoRight]:left-[200%]"
		>
			<img class="w-full" src={img2} alt="" />
		</div>

		<!-- 2 -->
		<div
			data-where={where(which - 2)}
			class="absolute flex items-center h-full w-full transition-all duration-1000 data-[where=twoLeft]:-left-[200%] data-[where=left]:-left-full data-[where=mid]:left-0 data-[where=right]:left-full data-[where=twoRight]:left-[200%]"
		>
			<img class="w-full" src={img3} alt="" />
		</div>
	</div>
</section>
