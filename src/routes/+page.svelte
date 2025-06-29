<script>
	import { db } from '$lib/firebase';
	import { auth } from '$lib/firebase';
	import { collection, addDoc, getDocs } from 'firebase/firestore';
	import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

	let name = '';
	let guests = [];
	let email = '';
	let password = '';
	let user = null;
	let error = '';

	// Sign in user
	async function login() {
		error = '';
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			user = userCredential.user;
			await loadGuests();
		} catch (e) {
			error = e.message;
		}
	}

	// Add a new guest to Firestore
	async function addGuest() {
		if (!user) {
			error = 'You must be logged in!';
			return;
		}
		if (name.trim() === '') return;
		await addDoc(collection(db, 'guests'), { name });
		name = '';
		await loadGuests();
	}

	// Load guests from Firestore
	async function loadGuests() {
		if (!user) return;
		const querySnapshot = await getDocs(collection(db, 'guests'));
		guests = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	}

	// Watch for auth state changes
	onAuthStateChanged(auth, (u) => {
		user = u;
		if (user) loadGuests();
		else guests = [];
	});
</script>

<h1>Welcome to SvelteKit (Auth Test)</h1>

{#if !user}
	<form on:submit|preventDefault={login}>
		<input bind:value={email} placeholder="Email" type="email" />
		<input bind:value={password} placeholder="Password" type="password" />
		<button type="submit">Login</button>
		{#if error}<div style="color:red">{error}</div>{/if}
	</form>
{:else}
	<form on:submit|preventDefault={addGuest}>
		<input bind:value={name} placeholder="Guest name" />
		<button type="submit">Add Guest</button>
	</form>

	<ul>
		{#each guests as guest}
			<li>{guest.name}</li>
		{/each}
	</ul>
{/if}
<p class="text-graycustom">تخهابهعياهميتخحعيخحتخحثع</p>
