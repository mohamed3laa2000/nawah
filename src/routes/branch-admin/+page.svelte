<script>
	import { onMount, tick } from 'svelte';
	import Chart from 'chart.js/auto';

	// Chart refs
	let chart1, chart1Canvas;
	let chart2, chart2Canvas;
	let chart3, chart3Canvas;
	let chart4, chart4Canvas;
	let chart5, chart5Canvas;
	let chart6, chart6Canvas;

	onMount(async () => {
		await tick();

		// Chart 1: عدد المرضى حسب القسم
		if (chart1Canvas) {
			if (chart1) chart1.destroy();
			chart1 = new Chart(chart1Canvas, {
				type: 'bar',
				data: {
					labels: ['الطوارئ', 'الجراحة', 'الباطنة', 'الأطفال', 'النساء والولادة'],
					datasets: [
						{
							label: 'عدد المرضى',
							data: [30, 20, 25, 15, 10],
							backgroundColor: '#60a5fa'
						}
					]
				},
				options: {
					responsive: true,
					plugins: {
						title: { display: true, text: 'عدد المرضى حسب القسم' },
						legend: { display: false }
					}
				}
			});
		}

		// Chart 2: عدد العمليات الجراحية خلال الأشهر
		if (chart2Canvas) {
			if (chart2) chart2.destroy();
			chart2 = new Chart(chart2Canvas, {
				type: 'line',
				data: {
					labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو'],
					datasets: [
						{
							label: 'عدد العمليات',
							data: [12, 15, 10, 18, 14],
							borderColor: '#34d399',
							backgroundColor: '#bae6fd',
							fill: true
						}
					]
				},
				options: {
					responsive: true,
					plugins: {
						title: { display: true, text: 'عدد الانشطة اليومية خلال الأشهر' },
						legend: { display: false }
					}
				}
			});
		}

		// Chart 3: توزيع المرضى حسب الجنس
		if (chart3Canvas) {
			if (chart3) chart3.destroy();
			chart3 = new Chart(chart3Canvas, {
				type: 'pie',
				data: {
					labels: ['ذكور', 'إناث'],
					datasets: [
						{
							label: 'الجنس',
							data: [60, 40],
							backgroundColor: ['#60a5fa', '#fbbf24']
						}
					]
				},
				options: {
					responsive: true,
					plugins: {
						title: { display: true, text: 'توزيع المرضى حسب الجنس' },
						legend: { display: true, position: 'top' }
					}
				}
			});
		}

		// Chart 4: نسبة الإشغال في الأقسام
		if (chart4Canvas) {
			if (chart4) chart4.destroy();
			chart4 = new Chart(chart4Canvas, {
				type: 'doughnut',
				data: {
					labels: ['الطوارئ', 'الجراحة', 'الباطنة', 'الأطفال'],
					datasets: [
						{
							label: 'نسبة الإشغال',
							data: [80, 65, 70, 50],
							backgroundColor: ['#bae6fd', '#7dd3fc', '#fbbf24', '#34d399']
						}
					]
				},
				options: {
					responsive: true,
					plugins: {
						title: { display: true, text: 'نسبة الإشغال في الأقسام' },
						legend: { display: true, position: 'top' }
					}
				}
			});
		}

		// Chart 5: توزيع الكادر الطبي
		if (chart5Canvas) {
			if (chart5) chart5.destroy();
			chart5 = new Chart(chart5Canvas, {
				type: 'radar',
				data: {
					labels: ['أطباء', 'ممرضين', 'فنيين', 'إداريين'],
					datasets: [
						{
							label: 'عدد الموظفين',
							data: [25, 40, 15, 10],
							backgroundColor: 'rgba(96,165,250,0.3)',
							borderColor: '#60a5fa'
						}
					]
				},
				options: {
					responsive: true,
					plugins: {
						title: { display: true, text: 'توزيع الكادر الطبي' },
						legend: { display: false }
					}
				}
			});
		}

		// Chart 6: زيارات العيادات الخارجية خلال الأسبوع
		if (chart6Canvas) {
			if (chart6) chart6.destroy();
			chart6 = new Chart(chart6Canvas, {
				type: 'polarArea',
				data: {
					labels: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
					datasets: [
						{
							label: 'عدد الزيارات',
							data: [50, 60, 55, 70, 65],
							backgroundColor: ['#bae6fd', '#7dd3fc', '#fbbf24', '#34d399', '#60a5fa']
						}
					]
				},
				options: {
					responsive: true,
					plugins: {
						title: { display: true, text: 'زيارات العيادات الخارجية خلال الأسبوع' },
						legend: { display: false }
					}
				}
			});
		}
	});
</script>

<!-- KPI Cards (example, static) -->
<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
	<div class="rounded-xl bg-[#f2fafd] p-6 text-center">
		<div class="text-xl font-bold text-gray-700">عدد المرضى</div>
		<div class="mb-1 mt-2 text-3xl font-extrabold text-primary">120</div>
	</div>
	<div class="rounded-xl bg-[#f2fafd] p-6 text-center">
		<div class="text-xl font-bold text-gray-700">الانشطة اليومية</div>
		<div class="mb-1 mt-2 text-3xl font-extrabold text-primary">45</div>
	</div>
	<div class="rounded-xl bg-[#f2fafd] p-6 text-center">
		<div class="text-xl font-bold text-gray-700">قيد التنفيذ</div>
		<div class="mb-1 mt-2 text-3xl font-extrabold text-primary">300</div>
	</div>
	<div class="rounded-xl bg-[#f2fafd] p-6 text-center">
		<div class="text-xl font-bold text-gray-700">عدد الموظفين</div>
		<div class="mb-1 mt-2 text-3xl font-extrabold text-primary">90</div>
	</div>
</div>

<!-- Charts Grid -->
<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
	<div class="flex min-h-[300px] flex-col items-center rounded-xl bg-[#f2fafd] p-4">
		<canvas bind:this={chart1Canvas} width="350" height="220"></canvas>
	</div>
	<div class="flex min-h-[300px] flex-col items-center rounded-xl bg-[#f2fafd] p-4">
		<canvas bind:this={chart2Canvas} width="350" height="220"></canvas>
	</div>
	<div class="flex min-h-[300px] flex-col items-center rounded-xl bg-[#f2fafd] p-4">
		<canvas bind:this={chart3Canvas} width="350" height="220"></canvas>
	</div>
	<div class="flex min-h-[300px] flex-col items-center rounded-xl bg-[#f2fafd] p-4">
		<canvas bind:this={chart4Canvas} width="350" height="220"></canvas>
	</div>
	<div class="flex min-h-[300px] flex-col items-center rounded-xl bg-[#f2fafd] p-4">
		<canvas bind:this={chart5Canvas} width="350" height="220"></canvas>
	</div>
	<div class="flex min-h-[300px] flex-col items-center rounded-xl bg-[#f2fafd] p-4">
		<canvas bind:this={chart6Canvas} width="350" height="220"></canvas>
	</div>
</div>
