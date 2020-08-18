const gnar = 'gnarly';
const info = ({ file = __filename, dir = __dirname }) => (
  <p>
    {dir}:{file}
  </p>
);

switch (gnar) {
  default:
    console.log('gnarly');
    break;
}

function gnar2() {
  const [nickname, setNickname] = useState('dude');
  return <h1>gnarly</h1>;
}

function Image() {
  return <img src="/img.png" />;
}
function dog(bark, cat) {
  console.log('please refactor');
}
console.log('Prettier Test');
