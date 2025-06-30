<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const links = [
		{ label: 'الرئيسية', icon: 'fas fa-home', path: '/branch-admin' },
		{ label: 'مسؤول الصفحات', icon: 'fas fa-user-cog', path: '/branch-admin/staff' },
		{ label: 'ملفات النزلاء', icon: 'fas fa-file-alt', path: '/branch-admin/guests' },
		{ label: 'المهام اليومية للنزلاء', icon: 'fas fa-tasks', path: '/branch-admin/tasks' },
		{ label: 'قسم الصيانة و التشغيل', icon: 'fas fa-tools', path: '/branch-admin/maintenance' },
		{
			label: 'قسم الخدمات الاجتماعية',
			icon: 'fas fa-users',
			path: '/branch-admin/services'
		},
		{ label: 'القسم الطبي', icon: 'fas fa-plus-square', path: '/branch-admin/medical' }
	];

	function logout() {
		goto('/login');
	}
</script>

<!-- Sidebar (fixed, starts below navbar) -->
<aside
	class="fixed right-0 top-20 z-20 flex h-[calc(100vh-5rem)] w-64 flex-col items-end bg-primary px-8 py-10 text-white"
>
	<div class="mb-8 w-full text-center text-lg font-bold">منصة نواة</div>
	<nav class="flex w-full flex-col gap-3">
		{#each links as link}
			<a
				href={link.path}
				class="flex items-center rounded px-2 py-1 text-right transition-all
					hover:bg-white/10 hover:text-secondary"
				class:bg-secondary={$page.url.pathname === link.path}
				class:text-primary={$page.url.pathname === link.path}
				class:text-white={$page.url.pathname !== link.path}
			>
				<span>{link.label}</span>
				<span class="text-2xl"><i class={link.icon}></i></span>
			</a>
		{/each}
	</nav>
	<!-- Logout Button -->
	<button
		on:click={logout}
		class="mt-auto flex w-full items-center justify-center gap-2 rounded bg-accent py-2 text-white transition hover:bg-secondary"
	>
		<span>تسجيل الخروج</span>
		<span class="text-2xl"><i class="fas fa-sign-out-alt"></i></span>
	</button>
</aside>

<!-- Main Content Area (margin for sidebar and navbar) -->
<main
	class="flex min-h-screen items-start justify-center overflow-y-auto bg-primary py-4 pl-10 pr-64"
>
	<div class="min-h-[80vh] w-full max-w-6xl rounded-2xl bg-white p-10 shadow-lg">
		<slot />
	</div>
</main>
