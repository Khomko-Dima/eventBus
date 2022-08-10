```javascript
import  eventBus from '@eventBus';
//...
useEffect(() => {
	const someFunction = () => {…}
	const unsubscribe = eventBus.testEvent.subscribe(someFunction);
	return () => unsubscribe()
}, [])
```