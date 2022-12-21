import { useLaguage } from '../Context/LaguageProvider';
import textPack from '../LanguageTexts';
function LaguageChoose() {
  const { setLaguage, laguage } = useLaguage();
  const { languageText } = textPack;
  return (
    <div className="navChooseLanguage">
      <select
        value={laguage}
        onChange={(e) => {
          setLaguage(Number(e.target.value));
        }}
      >
        {languageText.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default LaguageChoose;
