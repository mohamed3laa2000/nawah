<script>
    import { goto } from '$app/navigation';
    let email = '';
    let password = '';
    let error = '';
    function login() {
        // Add your login logic here
        goto('/branch-admin');
    }
</script>

<div class="bg-primary flex min-h-[calc(100vh-80px)] flex-1 items-center justify-evenly">
	<!-- Login Card -->
	<div class="flex w-full max-w-lg flex-col items-center rounded-xl bg-[#eaf4f7] p-20 shadow-lg">
		<h2 class="mb-2 w-full text-center text-3xl font-bold">مرحباً بكم</h2>
		<p class="text-graycustom mb-8 w-full text-center">الرجاء تسجيل الدخول حتى تتمكن من المتابعة</p>
		<form class="w-full space-y-6" on:submit|preventDefault={login}>
			<div>
				<label class="mb-1 block w-full text-right">البريد الإلكتروني</label>
				<input
					class="focus:ring-secondary w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
					type="email"
					placeholder="Johndoe@gmail.com"
					bind:value={email}
					required
				/>
			</div>
			<div>
				<label class="mb-1 block w-full text-right">كلمة المرور</label>
				<input
					class="focus:ring-secondary w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
					type="password"
					placeholder="************"
					bind:value={password}
					required
				/>
			</div>
			{#if error}
				<div class="text-right text-red-500">{error}</div>
			{/if}
			<button
				type="submit"
				class="bg-secondary hover:bg-accent w-full rounded py-3 text-white shadow-xl transition"
			>
				تسجيل الدخول
			</button>
		</form>
	</div>
	<!-- Left Side Logo and Vision 2030 -->
	<div class="w-xl hidden h-full flex-col justify-between p-10 md:flex">
		<div class="flex flex-1 items-center justify-center">
			<img src="/logo-short.svg" alt="Main Logo" class="w-80" />
		</div>
	</div>
</div>
