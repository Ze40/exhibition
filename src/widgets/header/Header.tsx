import Container from '../../shared/ui/Container';
import { title } from '../../style/fonts';
import { css } from '../../styled-system/css';
import { hstack } from '../../styled-system/patterns';

const Header = () => {
  return (
    <header className={css({ background: 'primary', padding: '10px 0' })}>
      <Container className={hstack({ justifyContent: 'space-between', gap: '5px' })}>
        <img src={'/assets/logo.png'} alt='logo' className={css({ width: 'logo' })} />
        <div className={css({ textAlign: 'center' })}>
          <h1 className={title()}>Цифровая выставка научных работ</h1>
          <h2 className={title({ size: 'sub' })}>студентов ФКТиПМ</h2>
        </div>
        <p className={css({ alignSelf: 'end', fontSize: 'small' })}>21-25 апреля</p>
      </Container>
    </header>
  );
};

export default Header;
