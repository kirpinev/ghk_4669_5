import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import { useState } from "react";
import bottom from "./assets/bottom.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { Switch } from "@alfalab/core-components/switch";
import { Checkbox } from "@alfalab/core-components/checkbox";
import { Link } from "@alfalab/core-components/link";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";
import { Input } from "@alfalab/core-components/input";
import { MaskedInput } from "@alfalab/core-components/masked-input";

interface ServiceVariant {
  name: string;
}

interface Services {
  name: string;
  services: ServiceVariant[];
}

const one: Services = {
  name: "Сервисы и услуги",
  services: [
    {
      name: "Бесплатные курсы: профобразование, личностный рост, финансы",
    },
    {
      name: "Сессии с психологом или коучем: бесплатно или со скидкой до 30%",
    },
    {
      name: "Скидки до 30% на страхование",
    },
    {
      name: "Бесплатный доступ к сервису «Финансовое здоровье»: личный консультант и финансовое планирование с ИИ",
    },
    {
      name: "Скидки до 30% в фитнес-залах",
    },
    {
      name: "Скидки до 30% на общественный транспорт",
    },
    {
      name: "Обслуживание без очередей в офисах банка и поддержке",
    },
    {
      name: "Скидки на телемедицину",
    },
    {
      name: "Консультации по налоговым вычетам",
    },
    {
      name: "Скидки до 30% на онлайн-библиотеки",
    },
    {
      name: "Участие в розыгрышах призов (сертификаты, проход в бизнес-залы)",
    },
  ],
};

const two: Services = {
  name: "Финансовые продукты",
  services: [
    {
      name: "Скидки до 30% от банка и партнёров: Альфа-Тревел, Альфа-Маркет, Яндекс Подписка, Афиша, Kassir, Заправки, Подели и др.",
    },
    {
      name: "Бесплатный определитель номера от Альфа-Банка",
    },
    {
      name: "Повышенный процент на остаток по накопительному счету",
    },
    {
      name: "Скидки на кредитные продукты",
    },
    {
      name: "Сотовая связь со скидкой 30%",
    },
    {
      name: "Защита процентов при досрочном закрытии вклада",
    },
  ],
};

const three: Services = {
  name: "Кэшбэк",
  services: [
    {
      name: "Увеличенный лимит кэшбэка",
    },
    {
      name: "Дополнительные категории на выбор",
    },
  ],
};

const four: ServiceVariant[] = [
  {
    name: "Транспорт",
  },
  {
    name: "АЗС",
  },
  {
    name: "Книги и канцтовары",
  },
  {
    name: "Активный отдых и фитнес",
  },
  {
    name: "Аптеки",
  },
  {
    name: "Медицинские услуги",
  },
  {
    name: "Образование",
  },
  {
    name: "ЖКХ",
  },
  {
    name: "Детские товары",
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [selectedServices, setSelectedServices] = useState<ServiceVariant[]>(
    [],
  );
  const [additionalServices, setAdditionalServices] = useState<
    ServiceVariant[]
  >([]);
  const [step, setStep] = useState(1);
  const [enabled, setEnabled] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string>("");

  const submit = () => {
    setLoading(true);

    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Особые условия для сотрудников госучереждений
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium">
            Выберите бонусы, которыми планируете пользоваться
          </Typography.Text>
          <img src={bottom} alt="Картинка" />
        </div>

        <Gap size={8} />

        {step === 1 && (
          <div>
            <Typography.TitleResponsive
              tag="h3"
              view="small"
              font="system"
              weight="bold"
            >
              {one.name}
            </Typography.TitleResponsive>
            <Gap size={16} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                border: "2px solid #F3F4F5",
                borderRadius: "1rem",
                padding: "12px",
              }}
            >
              {one.services.map((service) => (
                <Switch
                  key={service.name}
                  reversed={true}
                  label={service.name}
                  block={true}
                  checked={
                    !!selectedServices.find((s) => s.name === service.name)
                  }
                  onChange={() => {
                    const find = selectedServices.find(
                      (s) => s.name === service.name,
                    );

                    if (find) {
                      setSelectedServices([
                        ...selectedServices.filter(
                          (s) => s.name !== service.name,
                        ),
                      ]);
                    } else {
                      setSelectedServices([...selectedServices, service]);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <Typography.TitleResponsive
              tag="h3"
              view="small"
              font="system"
              weight="bold"
            >
              {two.name}
            </Typography.TitleResponsive>
            <Gap size={16} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                border: "2px solid #F3F4F5",
                borderRadius: "1rem",
                padding: "12px",
              }}
            >
              {two.services.map((service) => (
                <Switch
                  key={service.name}
                  reversed={true}
                  label={service.name}
                  block={true}
                  checked={
                    !!selectedServices.find((s) => s.name === service.name)
                  }
                  onChange={() => {
                    const find = selectedServices.find(
                      (s) => s.name === service.name,
                    );

                    if (find) {
                      setSelectedServices([
                        ...selectedServices.filter(
                          (s) => s.name !== service.name,
                        ),
                      ]);
                    } else {
                      setSelectedServices([...selectedServices, service]);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <Typography.TitleResponsive
              tag="h3"
              view="small"
              font="system"
              weight="bold"
            >
              {three.name}
            </Typography.TitleResponsive>
            <Gap size={16} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                border: "2px solid #F3F4F5",
                borderRadius: "1rem",
                padding: "12px",
              }}
            >
              {three.services.map((service, index) => (
                <Switch
                  key={service.name}
                  reversed={true}
                  label={service.name}
                  block={true}
                  checked={
                    !!selectedServices.find((s) => s.name === service.name)
                  }
                  onChange={() => {
                    const find = selectedServices.find(
                      (s) => s.name === service.name,
                    );

                    if (find) {
                      setSelectedServices([
                        ...selectedServices.filter(
                          (s) => s.name !== service.name,
                        ),
                      ]);

                      if (index === 1) {
                        setAdditionalServices([]);
                      }
                    } else {
                      setSelectedServices([...selectedServices, service]);
                    }
                  }}
                />
              ))}
              {selectedServices.find(
                (s) => s.name === "Дополнительные категории на выбор",
              ) && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {four.map((service) => (
                    <div
                      key={service.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography.Text view="primary-medium">
                        {service.name}
                      </Typography.Text>
                      <Checkbox
                        size={24}
                        checked={
                          !!additionalServices.find(
                            (s) => s.name === service.name,
                          )
                        }
                        onChange={() => {
                          const find = additionalServices.find(
                            (s) => s.name === service.name,
                          );

                          if (find) {
                            setAdditionalServices([
                              ...additionalServices.filter(
                                (s) => s.name !== service.name,
                              ),
                            ]);
                          } else {
                            setAdditionalServices([
                              ...additionalServices,
                              service,
                            ]);
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <BottomSheet
        open={enabled}
        onClose={() => setEnabled(false)}
        actionButton={
          <>
            <ButtonMobile
              block
              view="primary"
              loading={loading}
              onClick={submit}
            >
              Отправить
            </ButtonMobile>

            <Gap size={8} />

            <ButtonMobile
              block
              view="secondary"
              loading={loading}
              onClick={() => setEnabled(false)}
            >
              Закрыть
            </ButtonMobile>
          </>
        }
      >
        <Typography.TitleResponsive
          tag="h1"
          view="medium"
          font="system"
          weight="bold"
          style={{ textAlign: "center" }}
        >
          Хотите подключиться к зарплатному проекту?Оставьте контакты, мы с вами
          свяжемся
        </Typography.TitleResponsive>

        <Gap size={32} />

        <Input
          block={true}
          placeholder="Имя"
          labelView="outer"
          size={48}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Gap size={8} />

        <MaskedInput
          value={phone}
          onChange={(_, payload) => setPhone(payload.value)}
          mask={[/\d/, /\d/, /\d/, /\d/]}
          placeholder="Последние 4 цифры телефона"
          labelView="outer"
          size={48}
          block={true}
        />

        <Gap size={32} />
      </BottomSheet>

      {step === 1 && (
        <>
          <Gap size={72} />

          <div className={appSt.bottomBtn}>
            <ButtonMobile block view="primary" onClick={() => setStep(2)}>
              Продолжить
            </ButtonMobile>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <Gap size={128} />

          <div className={appSt.bottomBtn}>
            <ButtonMobile block view="primary" onClick={() => setStep(3)}>
              Продолжить
            </ButtonMobile>

            <Gap size={12} />

            <Link
              pseudo={true}
              style={{ margin: "0 auto" }}
              view="primary"
              onClick={() => setStep(1)}
            >
              Назад
            </Link>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <Gap size={128} />

          <div className={appSt.bottomBtn}>
            <ButtonMobile
              block
              view="primary"
              loading={loading}
              onClick={() => setEnabled(true)}
            >
              Продолжить
            </ButtonMobile>

            <Gap size={12} />

            <Link pseudo={true} view="primary" onClick={() => setStep(2)}>
              Назад
            </Link>
          </div>
        </>
      )}
    </>
  );
};
