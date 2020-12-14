import GlassesList from './GlassesList'
import Glasses from './Glasses'
import GlassesUrl from './GlassesUrl'

const NewGlassesList = GlassesList.map((product, index) => {
  return (
    { ...product, ...GlassesUrl[index], ...Glasses[index] }
  );
});

export default NewGlassesList;