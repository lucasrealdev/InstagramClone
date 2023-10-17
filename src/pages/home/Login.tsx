import { useState } from 'react';
import { Button, TextInput, Content } from '@carbon/react';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    alert(username)
  };

  return (
    <Content>
        <TextInput
            className="input-test-class mb-3"
            id="text-input-1"
            invalidText="Error message goes here"
            labelText=""
            onChange={(e) => {setUsername(e.target.value)}}
            placeholder="Nome"
            size="md"
            type="text"
            warnText="Warning message that is really long can wrap to more lines but should not be excessively long."
        />
    
        <Button kind="tertiary" onClick={handleLogin}>
            Cadastrar    
        </Button>
    </Content>
  );
};

export default Login;