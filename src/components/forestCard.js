export default function createForestCard(nationalForests) {
    return `
    <div class="forestCard">
			<img class="forestImage" src="${nationalForests.imageURL}" alt="Forest Image">
			<h2 class="forestName">${nationalForests.name}</h2>
			${nationalForests.dispersedCampingAllowed && '<span class="dispersed-badge">Dispersed Camping Allowed</span>'}
			<p class="forestDistance">${nationalForests.distance} miles away</p>
			<p class="forestDescription">${nationalForests.description}</p>
			<a class="forestLink" href="${nationalForests.link}" target="_blank">View Official USFS Page</a>
		</div>`;
};