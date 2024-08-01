import toast from "react-hot-toast";
import {
  addData,
  deleteById,
  retrieveData,
} from "../../services/firebase/services";
import CommentBox from "../components/commentBox";
import MainLayout from "../components/mainLayout";
import { useEffect, useState } from "react";

type commentTypes = {
  id: string;
  name?: string;
  comment?: string;
  created_at?: { seconds: number; nanoseconds: number };
  update_at?: { seconds: number; nanoseconds: number };
};

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

export default function Comment({
  refComment,
  name,
}: {
  refComment: any;
  name?: string;
}) {
  const [comments, setComments] = useState<commentTypes[]>([]);

  useEffect(() => {
    getComments();
  }, []);

  const convertTimestampToDate = (
    timestamp: FirestoreTimestamp | null | undefined
  ) => {
    if (!timestamp) return new Date(0);

    const seconds = timestamp.seconds || 0;
    const nanoseconds = timestamp.nanoseconds || 0;

    return new Date(seconds * 1000 + nanoseconds / 1_000_000);
  };

  const getComments = async () => {
    const data: commentTypes[] = await retrieveData("comments");
    const sortedComments = data?.sort((a: commentTypes, b: commentTypes) => {
      const dateA: Date = convertTimestampToDate(a.created_at);
      const dateB: Date = convertTimestampToDate(b.created_at);
      return dateB.getTime() - dateA.getTime();
    });
    setComments(sortedComments);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;
    const formName =
      (target.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const comment =
      (target.elements.namedItem("comment") as HTMLInputElement)?.value || "";

    if (formName === "") {
      return alert("Gunakan nama dari link yang telah dikirim oleh admin");
    }

    if (formName !== name) {
      return alert("Gunakan link yang telah dikirim oleh admin");
    }

    if (comment === "") {
      return alert("Tolong tuliskan ucapan dan doa restu Anda");
    }

    const userCommented = comments.some(
      (existingComment) => existingComment.name === formName
    );

    if (userCommented) {
      return alert("Anda sudah memberikan ucapan dan doa restu");
    }

    setComments([
      ...comments,
      {
        id: crypto.randomUUID(),
        name: formName,
        comment,
      },
    ]);
    handleComment(formName, comment);
  };

  const handleComment = async (name: string, comment: string) => {
    const userCommented = comments.some(
      (existingComment) => existingComment.name === name
    );

    if (userCommented) {
      return alert("Anda sudah memberikan ucapan dan doa restu");
    }

    try {
      await addData("comments", {
        name,
        comment,
        created_at: new Date(),
        update_at: new Date(),
      });
      toast.success("Berhasil Di Kirim");
    } catch (error) {
      console.log(error);
      toast.error("Gagal Mengirim");
    } finally {
      getComments();
    }
  };

  const handleDeleteComment = async (id: string) => {
    try {
      await deleteById("comments", id);
      toast.success("Berhasil Di Hapus");
    } catch (error) {
      console.log(error);
      toast.error("Gagal Menghapus");
    } finally {
      getComments();
    }
  };
  return (
    <MainLayout height="h-full" className="gap-5">
      <h1 ref={refComment} className="text-xl latin-25">
        Kirim Ucapan & Doa Restu
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-2 w-full z-10"
      >
        <input
          name="name"
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          defaultValue={name}
          disabled
          readOnly
          className="border p-2 bg-gray-200"
        />
        <input
          name="comment"
          type="text"
          placeholder="Tulis ucapan & doa restu"
          disabled={name == "@tinadewa_admin"}
          className="border p-2 bg-gray-200 outline-none"
        />
        <button
          type="submit"
          className="bg-purple-500 px-3 py-2 text-white rounded-full"
        >
          Kirim
        </button>
      </form>
      <div className="max-h-[200px] overflow-y-scroll comment-scrollbar z-10 w-full">
        {comments?.map((comment) => (
          <CommentBox
            key={comment.id}
            id={comment?.id || ""}
            name={comment?.name || ""}
            comment={comment?.comment || ""}
            date={comment?.created_at || 0}
            admin={name == "@tinadewa_admin"}
            user={name == comment?.name}
            handleDeleteComment={handleDeleteComment}
            getComments={getComments}
          />
        ))}
      </div>
    </MainLayout>
  );
}
