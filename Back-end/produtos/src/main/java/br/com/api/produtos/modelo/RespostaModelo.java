//Este arquivo faz parte do "Model" do padrão MVC, usada para definir uma classe qual irá retornar diferentes tipos de mensagens baseando-se na ação escolhida pelo usuário.

package br.com.api.produtos.modelo;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@Getter
@Setter
public class RespostaModelo {
    
    private String mensagem;

}
