export default function(){
	this.transition(
	  this.fromRoute('home.index'),
	  this.toRoute('home.room'),
	  this.use('toLeft', {duration: 300}),
	  this.reverse('toRight', {duration: 300})
	);
}