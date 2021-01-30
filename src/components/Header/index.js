import React from 'react';
import { RiLoaderLine, FiAlertTriangle, AiOutlineCloudUpload } from 'react-icons/all';

import { Container, Content, StatisticList, StatisticListItem } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <h1>Upload de arquivos</h1>

        <StatisticList>
          <StatisticListItem>
            <section>
              <span>Executando</span>

              <RiLoaderLine size={25} color="#FF872C" />
            </section> 

            <h1>0 arquivos</h1>
          </StatisticListItem>
          <StatisticListItem>
            <section>
              <span>Enviadas</span>

              <AiOutlineCloudUpload size={25} color="#12A454" />
            </section> 

            <h1>0 arquivos</h1>
          </StatisticListItem>
          <StatisticListItem>
            <section>
              <span>Falhas</span>

              <FiAlertTriangle size={25} color="#E83F5B" />
            </section> 

            <h1>0 arquivos</h1>
          </StatisticListItem>
        </StatisticList>
      </Content>
    </Container>
  );
}