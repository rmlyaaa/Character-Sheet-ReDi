import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useCharacters } from "../context/CharacterContext";
import type { Character } from "../types/character";

type CreateFormData = {
  name: string;
  desc: string;
  str: number;
  dex: number;
  rea: number;
  con: number;
  per: number;
  int: number;
  cha: number;
  wp: number;
};

export const Create = () => {
  const { addCharacter } = useCharacters();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>();

  function onSubmit(data: CreateFormData) {
    const newCharacter: Character = {
      id: crypto.randomUUID(),
      name: data.name,
      desc: data.desc,
      up: 0,
      dip: 0,
      attributes: [
        { name: "STR", value: data.str },
        { name: "DEX", value: data.dex },
        { name: "REA", value: data.rea },
        { name: "CON", value: data.con },
        { name: "PER", value: data.per },
        { name: "INT", value: data.int },
        { name: "CHA", value: data.cha },
        { name: "WP", value: data.wp },
        { name: "???", value: 0 },
      ],
      skills: [],
      weapons: [],
      inventory: [],
    };

    addCharacter(newCharacter);
    navigate(`/character/${newCharacter.id}`);
  }

  return (
    <main className="hero">
      <h1 className="title">Create Character</h1>

      <div className="divider" />

      <form onSubmit={handleSubmit(onSubmit)} className="add-form">
        <div className="info-input">
          <div>
            <label>
              Name:
              <input
                className="text-input"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
            </label>

            {errors.name && <p className="err">{errors.name.message}</p>}
          </div>

          <div>
            <label>
              Description:
              <input
                className="text-input"
                {...register("desc", {
                  required: "Description is required",
                })}
              />
            </label>

            {errors.desc && <p className="err">{errors.desc.message}</p>}
          </div>
        </div>

        <label>
          STR
          <input
            className="num-input"
            type="number"
            defaultValue={8}
            {...register("str", {
              valueAsNumber: true,
              required: "Is required",
              min: {
                value: 5,
                message: "Must be at least 5",
              },
              max: {
                value: 20,
                message: "Must be 20 or less",
              },
            })}
          />
        </label>

        {errors.str && <p>{errors.str.message}</p>}

        <label>
          DEX
          <input
            className="num-input"
            type="number"
            defaultValue={8}
            {...register("str", {
              valueAsNumber: true,
              required: "Is required",
              min: {
                value: 5,
                message: "Must be at least 5",
              },
              max: {
                value: 20,
                message: "Must be 20 or less",
              },
            })}
          />
        </label>

        <label>
          REA
          <input
            className="num-input"
            type="number"
            defaultValue={8}
            {...register("str", {
              valueAsNumber: true,
              required: "Is required",
              min: {
                value: 5,
                message: "Must be at least 5",
              },
              max: {
                value: 20,
                message: "Must be 20 or less",
              },
            })}
          />
        </label>

        <label>
          CON
          <input
            className="num-input"
            type="number"
            defaultValue={8}
            {...register("str", {
              valueAsNumber: true,
              required: "Is required",
              min: {
                value: 5,
                message: "Must be at least 5",
              },
              max: {
                value: 20,
                message: "Must be 20 or less",
              },
            })}
          />
        </label>

        <label>
          PER
          <input
            className="num-input"
            type="number"
            defaultValue={8}
            {...register("str", {
              valueAsNumber: true,
              required: "Is required",
              min: {
                value: 5,
                message: "Must be at least 5",
              },
              max: {
                value: 20,
                message: "Must be 20 or less",
              },
            })}
          />
        </label>

        <label>
          INT
          <input
            className="num-input"
            type="number"
            defaultValue={8}
            {...register("str", {
              valueAsNumber: true,
              required: "Is required",
              min: {
                value: 5,
                message: "Must be at least 5",
              },
              max: {
                value: 20,
                message: "Must be 20 or less",
              },
            })}
          />
        </label>

        <label>
          CHA
          <input
            className="num-input"
            type="number"
            defaultValue={8}
            {...register("str", {
              valueAsNumber: true,
              required: "Is required",
              min: {
                value: 5,
                message: "Must be at least 5",
              },
              max: {
                value: 20,
                message: "Must be 20 or less",
              },
            })}
          />
        </label>

        <label>
          WP
          <input
            className="num-input"
            type="number"
            defaultValue={8}
            {...register("str", {
              valueAsNumber: true,
              required: "Is required",
              min: {
                value: 5,
                message: "Must be at least 5",
              },
              max: {
                value: 20,
                message: "Must be 20 or less",
              },
            })}
          />
        </label>

        <button type="submit" className="button">
          Create
        </button>
      </form>
    </main>
  );
};
